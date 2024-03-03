import { createSlice } from "@reduxjs/toolkit";

//this is dummy json data we are using to show as users
import { userData } from "../../data/userData";


const initialState = {
  userList: userData,
};


const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    createNewUser: (state, actions) => {
      state.userList.push(actions.payload)
    },
    updateUser(state, action) {
      const { ID } = action.payload;
      const index = state.userList.findIndex(user => user.ID === ID);
      if (index !== -1) {
        state.userList[index] = action.payload;
      }
    },
    deleteUser(state,action){
      console.log(action.payload);
      const { id } = action.payload
      state.userList = state.userList.filter(user => user.ID !== id);
    }
  },
})

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;