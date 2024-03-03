import { BrowserRouter, Routes , Route} from "react-router-dom";
import UserList from "./pages/userList/userList";
import CreateUser from "./pages/createUser";
import UserDetails from "./pages/userDetails/userDetails";
import "./app.css";
import UpdateUser from "./pages/updateUser";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header></Header>
   
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
        <Route path="/userDetails/:id" element={<UserDetails/>}></Route>
       </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App