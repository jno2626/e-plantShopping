import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({ name: "cart", initialState: { items: [], }, reducers: { addToCart: (state, action) => { const plant = state.items.find( (item) => item.id === action.payload.id );
            if (plant) {
                plant.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        increaseQuantity: (state, action) => {
            const plant = state.items.find(
                (item) => item.id === action.payload
            );

            if (plant) {
                plant.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const plant = state.items.find(
                (item) => item.id === action.payload
            );

            if (plant && plant.quantity > 1) {
                plant.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
    }, });
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, } = cartSlice.actions;
export default cartSlice.reducer;
