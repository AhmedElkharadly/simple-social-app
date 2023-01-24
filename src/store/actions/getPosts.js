import apiUrl from '../../apis/apiUrl';
import { SET_GET_Posts } from "./actionTypes";

export const getPosts=() => async (dispatch) => {
  try {
    const res = await apiUrl.get("/posts");
    dispatch({
      type: SET_GET_Posts,
      payload: res?.data,
    });
  } catch (err) {
    return console.log("dataErr", err);
  }
};
