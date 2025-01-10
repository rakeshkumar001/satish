import { combineReducers } from 'redux'
import UserLoggedInSlice from './Auth'
import MenuItemSelected from './MenuItemReducer'
import MenuCategorySlice from './MenuCategoryReducer'


export default combineReducers({
    UserLoggedInSlice,
    MenuItemSelected,
    MenuCategorySlice
})