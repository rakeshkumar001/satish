import { createSlice } from "@reduxjs/toolkit";

type MenuItemInerface = {
    selectedMenuItem: number
};
const initialState: MenuItemInerface = {
    selectedMenuItem: 1
}
export const MenuItemSelected = createSlice({
    name: 'menuItemSelected',
    initialState,
    reducers: {
        selectedMenuItem: (state, action) => {
            state.selectedMenuItem = action.payload
        }
    }
})
export const { selectedMenuItem } = MenuItemSelected.actions
export default MenuItemSelected.reducer