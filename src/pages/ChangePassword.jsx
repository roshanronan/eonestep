import React, { useState } from "react";
import { toast } from "react-toastify";
import { validate } from "../utils/formValidation";
import apiService from "../utils/apiService";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate,useLocation } from "react-router-dom";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/;

const validationRules = {
  oldPassword: { required: true, message: "Old password is required" },
  newPassword: {
    required: true,
    pattern: passwordPattern,
    message:
      "New password must be at least 10 characters and include uppercase, lowercase, number, and symbol",
  },
  confirmPassword: {
    required: true,
    custom: (value, formData) =>
      value !== formData.newPassword ? "Passwords do not match" : null,
  },
};

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation() || {};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData, validationRules);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
        try {
        let response = await apiService.post("/auth/change-password", {
        currentPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      },
      {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });
      if (response.status == 200) {
        toast.success(response?.message || "Password changed successfully");
        setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
        navigate("/eonestep/center-login");
    }
      } catch (error) {
        toast.error(error?.message || "Failed to change password");
      }
    } else {
      toast.error("Please fix the errors before submitting");
    }
  };

  return (
    <div className="login-container ">
    <div className="container login-card py-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-4 fw-bold text-center">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 position-relative">
          {/* <label className="form-label">Old Password</label> */}
          <input
            type={showOld ? "text" : "password"}
            className={`form-control${errors.oldPassword ? " is-invalid" : ""}`}
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="Enter old password"
          />
          <span
            className="position-absolute end-0 top-50 translate-middle-y me-3"
            style={{ cursor: "pointer", zIndex: 2 }}
            onClick={() => setShowOld((prev) => !prev)}
          >
            {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
          {errors.oldPassword && (
            <div className="invalid-feedback">{errors.oldPassword}</div>
          )}
        </div>
        <div className="mb-3 position-relative">
          {/* <label className="form-label">New Password</label> */}
          <input
            type={showNew ? "text" : "password"}
            className={`form-control${errors.newPassword ? " is-invalid" : ""}`}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
          />
          <span
            className="position-absolute end-0 top-50 translate-middle-y me-3"
            style={{ cursor: "pointer", zIndex: 2 }}
            onClick={() => setShowNew((prev) => !prev)}
          >
            {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
          {errors.newPassword && (
            <div className="invalid-feedback">{errors.newPassword}</div>
          )}
        </div>
        <div className="mb-3 position-relative">
          {/* <label className="form-label">Confirm New Password</label> */}
          <input
            type={showConfirm ? "text" : "password"}
            className={`form-control${
              errors.confirmPassword ? " is-invalid" : ""
            }`}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
          />
          <span
            className="position-absolute end-0 top-50 translate-middle-y me-3"
            style={{ cursor: "pointer", zIndex: 2 }}
            onClick={() => setShowConfirm((prev) => !prev)}
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Change Password
        </button>
      </form>
    </div>
    </div>
  );
};

export default ChangePassword;
