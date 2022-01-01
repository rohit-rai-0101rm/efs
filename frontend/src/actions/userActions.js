import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const { data } = await axios.post(
      `https://ecommr.herokuapp.com/api/v1/login`,
      { email, password },
      config
    );
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data.user
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  
