import axios from 'axios';
import {
  getAllHoteles,
  getHotelById,
  getFilteredHotels,
  setError,
  getHotelByName,
  setAllHotels,
} from '../reducer/hotelesSlice';

export const getAllHotel = () => async (dispatch) => {
  try {
    const response = await axios('/hotel');
    dispatch(getAllHoteles(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getHotelDetailById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/hotel/byId/${id}`);
    dispatch(getHotelById(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const getFilterHotels = (hoteles, filter) => async (dispatch) => {
  try {
    const response = await axios.post('/hotel/filter', { hoteles, filter });
    dispatch(getFilteredHotels(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

export const clearError = () => (dispatch) => {
  dispatch(setError(''));
};

export const getHotelByNameAprox = (name) => (dispatch) => {
  if (name) {
    dispatch(getHotelByName(name));
  } else dispatch(setAllHotels());
  
}
