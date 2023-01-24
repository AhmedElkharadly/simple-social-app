import apiUrl from "../../apis/apiUrl";
import { SET_GET_Post } from "./actionTypes";


export const getOnePost = (id) => async (dispatch) => {
  try {
    const res = await apiUrl.get(`/posts/${id}`);
    console.log(res);
    dispatch({
      type: SET_GET_Post,
      payload: res?.data,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
