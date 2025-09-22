import React, { useState } from "react";
import { X, Mail, Eye, EyeOff } from "lucide-react";
import logo from "./../assets/logo.png";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../utils/apiService";
import { validate } from "../utils/formValidation";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [isValid, setIsValid] = useState(false);
  const {loading, setLoading} = useAuth()
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    setToken(t);
    if (t) {
      apiService
        .get(`/auth/reset-password?token=${t}`)
        .then(() => {
          setIsValid(true);
        })
        .catch(() => {
          toast.error("Invalid or expired token");
          setIsValid(false);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setIsValid(false);
    }
  }, []);

  const validateForm = () => {
    const errs = {};
    if (!formData.newPassword) {
      errs.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      errs.newPassword = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      errs.confirmPassword = "Please confirm your new password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      errs.confirmPassword = "Passwords do not match";
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      await apiService.post("/auth/reset-password", {
        token,
        newPassword: formData.newPassword,
      });
      toast.success("Password reset successful!");
      navigate("/eonestep/center-login");
    } catch (err) {
      toast.error(err?.message || "Failed to reset password");
    }
  };

  if (loading) {
    return <div className="container mt-5 text-center">Verifying your link...</div>;
  }

  if (!isValid) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger">Invalid or expired token.</div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: 500 }}>
      <div className="card shadow-lg " >
        <div className="card-header text-white text-center form-header">
          <h4 className="text-white">Reset Password</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${
                    errors.newPassword ? "is-invalid" : ""
                  }`}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.newPassword && (
                  <div className="invalid-feedback d-block">
                    {errors.newPassword}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <div className="input-group">
                <input
                  type={showConfirm ? "text" : "password"}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowConfirm((v) => !v)}
                  tabIndex={-1}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.confirmPassword && (
                  <div className="invalid-feedback d-block">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
