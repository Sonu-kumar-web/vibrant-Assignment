import axios from "axios";
import { BASE_URL } from "../utils/APIUrls";

import {
  CREATE_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  POST_ERROR,
} from "./type";

// Create new Post
export const createPost = (formData) => async (dispatch) => {
  try {
    let data = await axios.post(`${BASE_URL}/create`, formData);
    dispatch({
      type: CREATE_POST,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: "Internal Server error!!!",
    });
  }
  return {
    type: CREATE_POST,
    payload: "",
  };
};

// Get post data
export const getPosts = () => async (dispatch) => {
  try {
    let users = await axios.get(`${BASE_URL}/users`);
    // console.log("Users", users.data);
    dispatch({
      type: GET_POST,
      payload: users.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: "Internal Server error!!!",
    });
  }
};

// Edit post
export const editPost = (formData) => async (dispatch) => {
  try {
    let result = await axios.put(`${BASE_URL}/edit`, formData);
    dispatch({
      type: EDIT_POST,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: "Post Edited Successfully!!!",
    });
  }
};

// Delete  post
export const deletePost = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`${BASE_URL}/delete?id=${id}`);
    dispatch({
      type: DELETE_POST,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: "Post not Deleted!!!",
    });
  }
};
