import { createSlice, nanoid } from "@reduxjs/toolkit";

type MenuCategoryInterface = {
    menuCategory: {
        id: any;
        list: {}[];
    }[]
};
const initialState: MenuCategoryInterface = {
    menuCategory: [{ id: '5440bf9810bd44609960e55324f8ceb3', list: [] }]
}
export const MenuCategorySlice = createSlice({
    name: 'menuCategory',
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            const selectedList = {
                id: action.payload.id,
                list: action.payload.list
            }
            state.menuCategory = [{ id: selectedList.id, list: selectedList.list }]
        }
    }
})
export const { selectedCategory } = MenuCategorySlice.actions
export default MenuCategorySlice.reducer