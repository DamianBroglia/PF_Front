import axios from 'axios';
import {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantName,
  getFilteredRestaurant,
  setError,
} from '../reducer/restaurantsSlice';

export const getAllRestaurant = () => async (dispatch) => {
  try {
    const response = await axios('/restaurant');
    dispatch(getAllRestaurants(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getRestaurantByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`/hotel?name=${name}`)
        dispatch(getRestaurantName(response.data))
    } catch (error) {
        dispatch(setError(error.message));
    }
}

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
