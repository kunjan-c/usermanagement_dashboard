
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import "./userDetails.css";
import Heading from "../components/heading/heading";
import arrowImg from "../assets/png/pngwing.com.png"
import { useState } from "react";

const UserDetails = () => {
  const { id } = useParams()
  const userList = useSelector(state => state.users.userList);
  const existingUser = userList.filter(f => f.ID == id);
  const [formData, setFormData] = useState({
    ID: existingUser[0].ID,
    username: existingUser[0].username,
    email: existingUser[0].email,
    role: existingUser[0].role
  });


  return (
    <div className="user-details-container">
      <div className="user-detail-header">

        <Link to={"/"}><img src={arrowImg} className="back-arrow-img" /></Link>
        <Heading headingText="User Details"></Heading>
        <Link to={`/update/${formData.ID}`}><div className="user-detail-edit-btn-container"> <button className="user-detail-edit-btn">Edit </button></div></Link>
      </div>

      <div className="user-detail-group">
        <div className="user-detail-field">Id:</div>
        <div className="user-detail-field-value">{formData.ID}</div>

      </div>
      <div className="user-detail-group">
        <div className="user-detail-field">Username:</div>
        <div className="user-detail-field-value">{formData.username}</div>

      </div>
      <div className="user-detail-group">
        <div className="user-detail-field">Email:</div>
        <div className="user-detail-field-value">{formData.email}</div>

      </div>
    </div>
  )
}

export default UserDetails