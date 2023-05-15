import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewHoteles: [],
  allHoteles: [],
  detail: {},
  error: '',
};

export const hotelesSlice = createSlice({
  name: 'hoteles',
  initialState,
  reducers: {
    getAllHoteles: (state, action) => {
      state.allHoteles = action.payload;
      state.viewHoteles = action.payload;
    },
    getHotelById: (state, action) => {
      state.detail = action.payload;
    },
    getFilteredHotels: (state, action) => {
      state.viewHoteles = action.payload;
    },
    getHotelByName: (state, action) => {
      state.viewHoteles = state.viewHoteles.filter((elem) => elem.name.toLowerCase().includes((action.payload).toLowerCase()));
    },
    setAllHotels: (state) => {
      state.viewHoteles = state.allHoteles;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getAllHoteles, getHotelById, setError, getFilteredHotels, getHotelByName, setAllHotels } =
  hotelesSlice.actions;

export default hotelesSlice.reducer;
