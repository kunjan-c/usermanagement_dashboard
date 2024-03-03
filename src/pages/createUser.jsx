import { useDispatch } from "react-redux";
import CardBox from "../components/cardBox/cardBox";
import { useNavigate } from "react-router-dom";
import { userSliceActions } from "../store/reduxSlices/userSlice";
import UserForm from "../components/userForm/userForm";

function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    //here onSubmit we send data to redux store 
    dispatch(userSliceActions.createNewUser(formData))
    navigate("/")
  };

  return (
    <div>
      <CardBox >
        <UserForm onFormSubmit={handleSubmit} formText="Create New User"></UserForm>
      </CardBox>
    </div>
  )
}

export default CreateUser