import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { plus,minus,change} from './cartSlice';

function Cart() {

    const {number,name}=useSelector((state)=>state.cart);

    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(change())}>Change</button>
        <h1>Hi i am state from cartSlice : {name}</h1>
        <button onClick={()=>dispatch(plus())}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>dispatch(minus())}>-</button>
    </div>
  )
}

export default Cart