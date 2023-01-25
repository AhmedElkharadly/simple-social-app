import {SET_GET_Posts ,SET_GET_Post } from '../actions/actionTypes'
const INITIAL_STATE = {
  list: [],
  post:{}
};

export function getPostsReducer(state = INITIAL_STATE, action) {
  // console.log(action.type);
  switch (action.type) {
    case SET_GET_Posts:
      return {
        ...state,
        list: action.payload,
      };
    case SET_GET_Post:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
