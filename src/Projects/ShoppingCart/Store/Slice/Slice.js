
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action)
            state.push(action.payload)
        },

        removeFomrCart(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    },
});

export const { addToCart,removeFomrCart } = cartSlice.actions;

export default cartSlice.reducer;

