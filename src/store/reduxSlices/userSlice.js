import { createSlice } from "@reduxjs/toolkit";

//this is dummy json data we are using to show as users
import { userData } from "../../data/userData";

// Load userList data from localStorage if available
const storedUserList = localStorage.getItem('userList');
const initialState = {

  userList: storedUserList ? JSON.parse(storedUserList) : userData,
};


const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    createNewUser: (state, actions) => {
      state.userList.push(actions.payload);
      localStorage.setItem('userList', JSON.stringify(state.userList));
    },
    updateUser(state, action) {
      const { ID } = action.payload;
      const index = state.userList.findIndex(user => user.ID === ID);
      if (index !== -1) {
        state.userList[index] = action.payload;
        localStorage.setItem('userList', JSON.stringify(state.userList)); 
      }
    },
    deleteUser(state,action){
      console.log(action.payload);
      const { id } = action.payload
      state.userList = state.userList.filter(user => user.ID !== id);
      localStorage.setItem('userList', JSON.stringify(state.userList));
    }
  },
})

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;