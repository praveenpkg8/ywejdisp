import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "categoryList",
    initialState: {
        categoryList: []
    },
    reducers: {
        getAllCategory: (state, action) => {
            state.categoryList = action.payload;
        },
    }
})

export const { getAllCategory } = categorySlice.actions;
export const selectCategoryList = (state) => state.categoryList.categoryList;
export default categorySlice.reducer;