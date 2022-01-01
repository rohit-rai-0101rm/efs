import{
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    CLEAR_ERRORS
} from '../constants/productConstants'

import axios from 'axios'
export const getProduct=()=> async (dispatch)=>{
    let link=`https://ecommr.herokuapp.com/api/v1/products`
    try{
        dispatch({type:ALL_PRODUCTS_REQUEST})
        
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const clearErrors=()=>async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}