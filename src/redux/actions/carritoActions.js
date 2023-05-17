import {
  addHotel,
  setError,
  estadoInicial,
  deleteHotel,
  addRestaurant,
  deleteRestaurant,
  addActivitie,
  deleteActivitie,
  setDate,
} from '../reducer/carritoSlice';

export const agregarActivitie = (Actividad) => async (dispatch) => {
  try {
    dispatch(addActivitie(Actividad));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const estadoInicialCarrito = () => async (dispatch) => {
  try {
    dispatch(deleteHotel());
    dispatch(deleteRestaurant());
    dispatch(estadoInicial());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const borrarActivitie = (Actividad) => async (dispatch) => {
  try {
    dispatch(deleteActivitie(Actividad));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const agregarHotel = (Hotel) => async (dispatch) => {
  dispatch(addHotel(Hotel));
};

export const borrarHotel = () => async (dispatch) => {
  dispatch(deleteHotel());
};

export const agregarRestaurant = (Restaurant) => async (dispatch) => {
  const { name } = Restaurant;
  dispatch(addRestaurant(name));
};

export const borrarRestaurant = () => async (dispatch) => {
  dispatch(deleteRestaurant());
};

export const dateSet = (date) => (dispatch) => {
  dispatch(setDate(date));
}
