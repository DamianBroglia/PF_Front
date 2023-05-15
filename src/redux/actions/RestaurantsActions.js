import axios from 'axios';
import {
  getAllRestaurants,
  getRestaurantById,
  getFilteredRestaurant,
  setError,
  getRestaurantByName,
  setAllResto,
} from '../reducer/restaurantsSlice';

export const getAllRestaurant = () => async (dispatch) => {
  try {
    const response = await axios('/restaurant');
    dispatch(getAllRestaurants(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getRestaurantDetailById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/restaurant/byId/${id}`);
    dispatch(getRestaurantById(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getFilterRestaurant = (restaurant, filter) => async (dispatch) => {
  try {
    const response = await axios.post('/restaurant/filter', {
      restaurant,
      filter,
    });
    dispatch(getFilteredRestaurant(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};
export const clearError = () => (dispatch) => {
  dispatch(setError(''));
};

export const getRestoByName = (name) => (dispatch) => {
  if (name) {
    dispatch(getRestaurantByName(name));
  } else dispatch(setAllResto());
}
