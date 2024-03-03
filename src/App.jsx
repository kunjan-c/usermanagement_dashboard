import { BrowserRouter, Routes , Route} from "react-router-dom"
import UserList from "./pages/userList"
import CreateUser from "./pages/createUser"
import EditUser from "./pages/editUser"
import UserDetails from "./pages/userDetails"
import "./app.css";
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
        <Route path="/userDetails/:id" element={<UserDetails/>}></Route>
       </Routes>
    </BrowserRouter>

  )
}

export default App