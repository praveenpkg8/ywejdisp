import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import categoryReducer from '../features/categorySlice';
import materialPriceReducer from '../features/materialPriceSlice';
import cartReducer from '../features/cartSlice';


const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
        console.log("saving to local storage")
        console.log(state)
    }catch(e) {
        console.error(e)
    }
}

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined;
        console.log('loading from local storage')
        console.log(serializedState)
        return JSON.parse(serializedState)
    }catch(e) {
        console.error(e)
    }
}

const preloadedState = loadFromLocalStorage();


const store = configureStore({
    reducer: {
        user: userReducer,
        categoryList: categoryReducer,
        material: materialPriceReducer,
        cartList: cartReducer,
    }, preloadedState  
} )
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store