/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import "./userForm.css";
import Heading from "../heading/heading";
import { Link } from 'react-router-dom';


const UserForm = ({ initialFormData, onFormSubmit,formText }) => {
  console.log(initialFormData);
  const [formData, setFormData] = useState(initialFormData || {
    ID: '',
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
    onFormSubmit(formData);
  };

  return (
    <div className="form-container">
      <Link to="/"><div className="close-icon">&times;</div></Link>
      <Heading headingText={formText}></Heading>
      <form onSubmit={handleSubmit}>
        <div className="user-creation-form-group">
          <label htmlFor="ID">ID:</label>
          <input type="text" id="ID" name="ID" value={formData.ID} onChange={handleChange} />
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="user-creation-form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
          <option value="">select</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="position-center">
          <button type="submit" className="user-create-sub-btn">{formText === "Update User" ? "Update" : "Create"}  </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
