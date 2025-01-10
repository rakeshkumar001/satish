import { createSlice, nanoid } from "@reduxjs/toolkit";

type TodoInterface = {
    todos: {
        id: any;
        text: string;
    }[]
};
const initialState: TodoInterface = {
    todos: [{ id: 1, text: "hello world" }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todoItem = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todoItem)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer