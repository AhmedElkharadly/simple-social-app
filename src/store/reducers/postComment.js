import {SET_GET_PostComment } from '../actions/actionTypes'
const INITIAL_STATE = {
  postComments:[]
};

export function getPostCommentsReducer(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_GET_PostComment:
      return {
        ...state,
        PostComments: action.payload,
      };
    default:
      return state;
  }
}
