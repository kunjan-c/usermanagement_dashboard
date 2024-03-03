// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"
import "./userDetails.css";
import Heading from "../components/heading/heading";
import arrowImg from "../assets/png/pngwing.com.png"
const UserDetails = () => {
  // const { id } = useParams()
  // console.log(id);
  // const userList = useSelector(state => state.users.userList);
 

  return (
    <div className="user-details-container">
      <div className="user-detail-header">
      <img src={arrowImg} className="back-arrow-img"/>
        <Heading headingText="User Details"></Heading>
       <div className="user-detail-edit-btn-container"> <button className="user-detail-edit-btn">Edit </button></div>
      </div>

      <div className="user-detail-group">
        <div className="user-detail-field">Id:</div>
        <div className="user-detail-field-value">12</div>

      </div>
      <div className="user-detail-group">
        <div className="user-detail-field">Name:</div>
        <div className="user-detail-field-value">Kunjan</div>

      </div>
      <div className="user-detail-group">
        <div className="user-detail-field">Email:</div>
        <div className="user-detail-field-value">choudharykunjan@gmail.com</div>

      </div>
      <div className="user-detail-group">
        <div className="user-detail-field">Username:</div>
        <div className="user-detail-field-value">Kunjan2345</div>

      </div>
    </div>
  )
}

export default UserDetails