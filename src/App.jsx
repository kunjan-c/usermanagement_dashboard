import { BrowserRouter, Routes , Route} from "react-router-dom"
import UserList from "./pages/userList"
import CreateUser from "./pages/createUser"
import UserDetails from "./pages/userDetails"
import "./app.css";
import UpdateUser from "./pages/updateUser"
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
        <Route path="/userDetails/:id" element={<UserDetails/>}></Route>
       </Routes>
    </BrowserRouter>

  )
}

export default App