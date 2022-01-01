import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

import axios from "axios";
export const getProducts = (keyword="",currentPage=1) => async (dispatch) => {
  let link = `https://ecommr.herokuapp.com/api/v1/products?keyword=${keyword}`;
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get(`https://ecommr.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}`);

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
export const getProductDetails=(id)=>async(dispatch)=>{
try{
  dispatch({
    type:PRODUCT_DETAILS_REQUEST
  })
  const{data}=await axios.get(`https://ecommr.herokuapp.com/api/v1/product/${id}`)
  dispatch({
    type:PRODUCT_DETAILS_SUCCESS,
    payload:data.product
  })
}catch(error){
  dispatch({
    type:PRODUCT_DETAILS_FAIL,
    payload:error.response.data.message
  })
}
}
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
