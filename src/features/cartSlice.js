import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartList",
    initialState: {
        itemList: []
    },
    reducers: {
        saveCartItem: (state, action) => {
            state.itemList = action.payload;
        },
    }
})

export const { saveCartItem } = cartSlice.actions;
export const selectCartItemList = (state) => state.cartList.itemList;

export default cartSlice.reducer;

