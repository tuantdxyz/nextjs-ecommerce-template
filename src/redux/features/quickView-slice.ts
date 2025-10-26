import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface InitialState {
  value: Product | null;
}

const initialState: InitialState = {
  value: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductDetails(state, action: PayloadAction<Product>) {
      state.value = action.payload;
    },
    clearProductDetails(state) {
      state.value = null;
    },
  },
});

export const { setProductDetails, clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
