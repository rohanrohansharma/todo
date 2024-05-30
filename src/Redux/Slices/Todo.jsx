import { createSlice } from "@reduxjs/toolkit";


export const Todo = createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        
        add:(state,action) =>{
         
            state.push(action.payload);

        },
        remove:(state,action)=>{
            return state.filter( (item) => item !== action.payload)
        },
    }
});

export const {add,remove} = Todo.actions;
export default Todo.reducer;