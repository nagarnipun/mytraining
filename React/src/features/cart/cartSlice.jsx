import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState: {
        number: 0,
        name:"Raj nagar"
      },
    
      reducers: {
        
        change:(state)=>{
            return {...state,name:"Akash Nagar"};
        },
        plus:(state)=>{
          return {...state,number:state.number+1};
        },
        minus:(state)=>{
            state.number-=1;
         },
    },
    
})
export const { plus,minus,change } = cartSlice.actions
export default cartSlice.reducer