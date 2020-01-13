import axios from "axios";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING, INCREASE_ITEMS, DECREASE_ITEMS } from "./types";
import { tokenConfig } from "./authActions"
import { returnErrors } from "./errorActions"

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/inventory")
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteItem = (id) => (dispatch, getState) => {

  axios
    .delete(`/api/inventory/${id}`, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: DELETE_ITEMS,
        payload: id
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const increaseItem = (id) => (dispatch, getState) => {

  axios
    .put(`/api/inventory/${id}`, {
      
    }, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: INCREASE_ITEMS,
        payload: id
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}
export const decreaseItem = (id) => (dispatch, getState) => {

  axios
    .update(`/api/inventory/${id}`, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: DECREASE_ITEMS,
        payload: id
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const addItem = (item) => (dispatch, getState) => {

  axios
    .post("/api/inventory", item, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_ITEMS,
        payload: res.data
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}