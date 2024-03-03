import UserForm from "../components/userForm/userForm"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../store/reduxSlices/userSlice";
import CardBox from "../components/cardBox/cardBox";

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector(state => state.users.userList);

  const existingUser = userList.filter(f => f.ID == id);

  const handleSubmit = (formData) => {
    if (existingUser) {
      // Update existing user
      const updatedUser = { ...existingUser, ...formData };
      console.log(updatedUser);
      dispatch(userSliceActions.updateUser(updatedUser));
    }
    navigate("/")

  };

  return (
    <div>
      <CardBox>
        {existingUser && <UserForm onFormSubmit={handleSubmit} initialFormData={existingUser[0]} formText="Update User" />}
      </CardBox>
    </div>
  )
}

export default UpdateUser