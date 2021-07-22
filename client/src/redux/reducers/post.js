import {
  CREATE_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  POST_ERROR,
} from "../actions/type";

const initialState = {
  posts: [],
  post: null,
  error: "",
};

const modifyPost = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        post: payload,
      };

    case GET_POST:
      return {
        ...state,
        posts: payload,
      };

    case EDIT_POST:
      return "";

    case DELETE_POST:
      return "";

    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default modifyPost;
