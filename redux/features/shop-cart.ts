import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { products: Product[]; openCart: boolean } = {
  products: [],
  openCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const itemInCart: Product | undefined = state.products.find((product) => product.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantityCart = (itemInCart.quantityCart ?? 1) + (action.payload.quantityCart ?? 0);
      } else {
        const product: Product = {
          ...action.payload,
          quantityCart: action.payload.quantityCart ?? 1,
        };
        state.products.push(product);
      }
    },
   
    removeProduct(state, action: PayloadAction<Product>) {
      state.products.splice(
        state.products.findIndex((product) => product.id === action.payload.id),
        1
      );
      setOpenCart(true);
    },
    decQte(state, action) {
      const itemInCart: Product | undefined = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (
        itemInCart &&
        itemInCart.quantityCart &&
        itemInCart.quantityCart > 1
      ) {
        itemInCart.quantityCart--;
      }
    },
    incQte(state, action: PayloadAction<Product>) {
      const itemInCart: Product | undefined = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart && itemInCart.quantityCart) {
        itemInCart.quantityCart++;
      }
    },
    clearCart(state) {
      state.products = [];
    },
    setOpenCart(state, action: PayloadAction<boolean>) {
      state.openCart = action.payload;
    },
  },
});

export const {
  addToCart,
  removeProduct,
  decQte,
  incQte,
  clearCart,
  setOpenCart,
} = cartSlice.actions;
export default cartSlice.reducer;
