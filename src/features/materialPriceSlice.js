import { createSlice } from "@reduxjs/toolkit";

export const materialPriceSlice = createSlice({
    name: "material",
    initialState: {
        gold: '',
        silver: '',
        platinum: '',
        daimond: '',
    },
    reducers: {
        updateGoldPrice: (state, action) => {
            state.gold = action.payload;
        },
        updateSilverPrice: (state, action) => {
            state.silver = action.payload;
        },
        updatePlatinumPrice: (state, action) => {
            state.platinum = action.payload;
        },
        updateDaimondPrice: (state, action) => {
            state.daimond = action.payload;
        },
    }
})

export const { updateGoldPrice, updateSilverPrice,
    updatePlatinumPrice, updateDaimondPrice } = materialPriceSlice.actions;
export const selectGoldPrice = (state) => state.material.gold;
export const selectSilverPrice = (state) => state.material.silver;
export const selectPlatinumPrice = (state) => state.material.platinum;
export const selectDaimondPrice = (state) => state.material.daimond;
export default materialPriceSlice.reducer;