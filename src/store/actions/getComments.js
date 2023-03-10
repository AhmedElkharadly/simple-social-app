import apiUrl from "../../apis/apiUrl";
import { SET_GET_PostComment } from "./actionTypes";


export const getOnePostComments = (id) => async (dispatch) => {
  try {
    const res = await apiUrl.get(`/posts/${id}/comments`);
    // console.log(res.data);
    dispatch({
      type: SET_GET_PostComment,
      payload: res?.data,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
