import { createSlice } from "@reduxjs/toolkit";

//this is dummy json data we are using to show as users
import { userData } from "../../data/userData";


const initialState = {
    userList: userData,
  };
  

const userSlice = createSlice({
    name : "users",
    initialState : initialState,
    reducers : {

    },
})

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;