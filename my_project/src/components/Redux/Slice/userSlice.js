import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users_state: [],
};

export const userSlice = createSlice({
  name: "user_defined_name",
  initialState,
  reducers: {
    setUser_reducer_fun: (state, action) => {
      //state-> current state i.e "users_state"
      state.users_state = [...state.users_state, action.payload]; //here for same current state "state.users_state" = we are spreading the same state(...state.user_state) and adding new in information through "action.payload"
    },
    deleteUser_reducer_fun: (state, action) => {
      state.users_state = state.users_state.filter(
        (user, index) => index != action.payload,
      ); // here we are taking current state (state.users_state) and with current state we are javascript filtering(filter(user,index)) which is iterate through each item in current state and it check wheatger if current state item is not equal to index then add it to "state.users_state" if bot index and state item matches then ignore that item from current state
    },
  },
});

// Action creation

export const { setUser_reducer_fun, deleteUser_reducer_fun } =
  userSlice.actions;

export default userSlice.reducer;
