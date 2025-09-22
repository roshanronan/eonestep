import React from 'react'

const initialFormState = {
  name: '',
  instituteName: '',  
  pincode: '',
  town: '',
  city: '',     
  state: '',
  phone: '',
  email: '',
  country: '',
  totalCoverArea: '',
  totalComputer: '',
  totalStaff: ''
}; 

const EditFranchise = () => {
     const injectionPattern = /(<script.*?>.*?<\/script.*?>)|(;|--|\b(select|update|delete|insert|drop|alter|create|truncate|exec|union|sleep)\b)/i;
 
       const [formData, setFormData] = useState({initialFormState});
       const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      if (files && files[0]) {
        setImagePreview(URL.createObjectURL(files[0]));
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
       if (value && injectionPattern.test(value)) {
      setErrors({[name]:'Invalid value detected.'})
    }
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div>EditFranchise</div>
  )
}

export default EditFranchise