import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CartsT = {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  totalPrice?: number;
  amount: number;
};

export type ProductT = {
  id: number;
  company: string;
  name: string;
  details: string;
  price: number;
  fullPrice: number;
  discount: number;
};

interface CartsState {
  carts: CartsT[];
}

const initialState: CartsState = {
  carts: [
    {
      id: 3,
      image: "",
      name: "mock up product",
      price: 300,
      totalPrice: 300 * 2,
      amount: 2,
    },
    {
      id: 4,
      image: "",
      name: "mock up product",
      price: 300,
      totalPrice: 300 * 2,
      amount: 2,
    },
    {
      id: 5,
      image: "",
      name: "mock up product",
      price: 300,
      totalPrice: 300 * 2,
      amount: 2,
    },
  ],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    handleAddCarts: (
      state,
      action: PayloadAction<{ product: ProductT; amount: number }>
    ) => {
      const tempCart = [...state.carts];
      const index = tempCart.findIndex((item) => item.id === action.payload.product.id);

      if (index === -1 && action.payload.amount === 0) return;

      // check if product doesn't have in cart
      if (index === -1) {
        tempCart.push({
          id: action.payload.product.id,
          image: "",
          name: action.payload.product.name,
          price: action.payload.product.price,
          totalPrice: action.payload.product.price * action.payload.amount,
          amount: action.payload.amount,
        });
        state.carts = [...tempCart];
        return;
      }

      // remove product from cart if have in cart and amount is 0
      if (action.payload.amount === 0) {
        tempCart.splice(index, 1);
        state.carts = [...tempCart];
        return;
      }

      // update product if have in cart and amount is not 0
      tempCart[index].amount = action.payload.amount;
      tempCart[index].totalPrice = tempCart[index].price! * action.payload.amount;
      state.carts = [...tempCart];
    },
    handleRemoveItemCart: (state, action: PayloadAction<{ id: number }>) => {
      const tempCart = [...state.carts];
      const getIdx = tempCart.findIndex((item) => item.id === action.payload.id);

      if (getIdx !== -1) {
        tempCart.splice(getIdx, 1);
        state.carts = [...tempCart];
      }
    },
  },
});

export const { handleAddCarts, handleRemoveItemCart } = cartsSlice.actions;

export default cartsSlice.reducer;
