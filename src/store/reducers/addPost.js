import { SET_ADD_Post } from "../actions/actionTypes";

const INITIAL_STATE = {
    post:{}
  };
  
export function addPostReducer(state = INITIAL_STATE, action) {
    console.log(action.type);
    switch (action.type) {
      case SET_ADD_Post:
        return {
          ...state,
          post: action.payload,
        };
      default:
        return state;
    }
  }