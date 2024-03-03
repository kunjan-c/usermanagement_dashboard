/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import "./userForm.css";
import Heading from "../heading/heading";
import { Link } from 'react-router-dom';


const UserForm = ({ initialFormData, onFormSubmit, formText }) => {

  const [formData, setFormData] = useState(initialFormData || {
    ID: '',
    username: '',
    email: '',
    role: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    role: ''
  });


  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData);
    }
  }, [initialFormData]);

  //Handle Form Input Cahnge
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);
      history.push('/');
    }
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate ID only if create user 
    if(formText === "Create New User"){
      if (!formData.ID.trim()) {
        newErrors.ID = 'ID is required';
        valid = false;
      } 
    }
  

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Validate role
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  return (
    <div className="form-container">
      <Link to="/"><div className="close-icon">&times;</div></Link>
      <Heading headingText={formText}></Heading>
      <form onSubmit={handleSubmit}>
        <div className="user-creation-form-group">
          <label htmlFor="ID">ID:</label>
          <input type="text" id="ID" name="ID" value={formData.ID} onChange={handleChange} disabled={formText === "Update User"} />
          {errors.ID && <div className="error">{errors.ID}</div>}
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="">select</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          {errors.role && <div className="error">{errors.role}</div>}
        </div>

        <div className="position-center">
          <button type="submit" className="user-create-sub-btn">{formText === "Update User" ? "Update" : "Create"}  </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
