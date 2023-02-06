import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
});

// function productExists(product, products){
//     for(let i=0; i < products.length; i++){
//         if( products[i]._id === product._id ){
//             return true;
//         }
//         return false;
//     }
// }

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;