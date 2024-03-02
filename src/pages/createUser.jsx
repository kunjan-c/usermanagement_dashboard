import CardBox from "../components/cardBox/cardBox"
import UserForm from "../components/userForm.jsx/userForm"

function CreateUser() {
  return (
    <div>
      <CardBox >
        {
          <UserForm></UserForm>
        }

      </CardBox>
    </div>
  )
}

export default CreateUser