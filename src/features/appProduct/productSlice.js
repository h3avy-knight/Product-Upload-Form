import { createSlice } from '@reduxjs/toolkit';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import { v4 as uuidv4 } from 'uuid';

export const productSlice = createSlice({
  name: 'addProducts',
  initialState: {
    value: [
      {
        id: uuidv4(),
        name: 'ABC',
        price: 1200,
        desc: 'DESCRIPTION',
        image: image1,
      },
      {
        id: uuidv4(),
        name: 'XYZ',
        price: 1200,
        desc: 'DESCRIPTION',
        image: image2,
      },
      {
        id: uuidv4(),
        name: 'XYZ',
        price: 1200,
        desc: 'DESCRIPTION',
        image: image2,
      },
      {
        id: uuidv4(),
        name: 'XYZ',
        price: 1200,
        desc: 'DESCRIPTION',
        image: image2,
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
