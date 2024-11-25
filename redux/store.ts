import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/features/shop-cart"
import { useDispatch } from "react-redux";
import { Product } from "@/types";


const loadProducts = () => {
  let products:Product[]=[]
  if(typeof window !== "undefined") {
    if(localStorage.getItem("cart")){
      const serializedState:string =  localStorage.getItem('cart') || "";
      if(serializedState !== null){
        products= JSON.parse(serializedState)
      }
    }
  }
  return products;
};
  
  const saveState = (state:Product[]) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
     console.log(err)
    }
};



const store = configureStore({
    reducer :{
        cartItems:cartSlice
    },
    preloadedState:{
      cartItems:{
        products: loadProducts(),
        openCart:false
      }
    }
})

store.subscribe(() => {
    saveState(store.getState().cartItems.products);
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch



export default store