import { useState } from 'react';
import "./userForm.css";
import Heading from "../heading/heading";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSliceActions } from "../../store/reduxSlices/userSlice";
import { useDispatch } from "react-redux";
const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    ID: '',
    username: '',
    email: '',
    role: ''
  });
//   const { id } = useParams()
//   console.log(id);
//   const userList = useSelector(state => state.users.userList);
//  console.log(userList);
//  const existingUser = userList.filter(f => f.ID == id);
//  console.log(existingUser);

// //  const {name,email} = existingUser[0];
  //Handle Form Input Cahnge
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //here onSubmit we send data to redux store 
    dispatch(userSliceActions.createNewUser(formData))
    navigate("/")

  };

  return (
    <div className="form-container">
      <Heading headingText="Create New User"></Heading>
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
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="position-center">
          <button type="submit" className="user-create-sub-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
