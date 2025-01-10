import { createSlice } from "@reduxjs/toolkit";

type IsLoggedInInterface = {
    isLoggedIn: boolean
};
const initialState: IsLoggedInInterface = {
    isLoggedIn: true
}
export const UserLoggedInSlice = createSlice({
    name: 'userLoggedIn',
    initialState,
    reducers: {
        checkLogin: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})
export const { checkLogin } = UserLoggedInSlice.actions
export default UserLoggedInSlice.reducer