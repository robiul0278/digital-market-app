import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

interface CartState {
  items: CartItem[];
  tax: number;
  shipping: number;
}

const initialState: CartState = {
  items: [],
  tax: 0,
  shipping: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      // Update tax (10% of subtotal)
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.tax = subtotal * 0.1;
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        // Update tax
        const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        state.tax = subtotal * 0.1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Update tax
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.tax = subtotal * 0.1;
    },
    clearCart: (state) => {
      state.items = [];
      state.tax = 0;
      state.shipping = 0;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectTax = (state: { cart: CartState }) => state.cart.tax;
export const selectShipping = (state: { cart: CartState }) => state.cart.shipping;
export const selectSubtotal = (state: { cart: CartState }) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectTotal = (state: { cart: CartState }) => {
  const subtotal = selectSubtotal(state);
  return subtotal + state.cart.tax + state.cart.shipping;
};

export default cartSlice.reducer;