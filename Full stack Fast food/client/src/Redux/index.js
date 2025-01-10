import { combineReducers } from 'redux'
import todoSlice from './TodoList'
import MenuCategorySlice from './MenuCategoryReducer'

export default combineReducers({
    todoSlice,
    MenuCategorySlice
})