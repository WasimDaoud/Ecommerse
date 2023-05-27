import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    initialState : [] ,
    name : "CartSlice" ,
    reducers : {
        addProduct : ( state , action )=>{
            const found = state.find((product)=> product.id === action.payload.id);

            if ( found ) {
                found.quantity += 1 ;
            }else{
                const clone = {...action.payload , quantity : 1 } ;
                state.push(clone);
            }
        } ,

        deleteProduct : ( state , action ) =>{
            const found = state.find((product)=> product.id === action.payload.id);
            const arr = state.filter((product)=> product.id != action.payload.id);

            if(found) 
            {
                if(found.quantity > 1)
                {
                    found.quantity -= 1 ;
                    console.log('deleted successfully')
                }
                else
                {
                    console.log(arr)
                    return arr;
                }
            }
        } ,

        clear : ( state , action )=>{
            return [];
        }
    }
});

export default CartSlice.reducer ;
export const { addProduct , deleteProduct , clear } = CartSlice.actions ;


