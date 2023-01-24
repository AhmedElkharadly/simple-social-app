import apiUrl from "../../apis/apiUrl";
import { SET_ADD_Post } from "./actionTypes";

export const addPost = (post) => async (dispatch) => {
  try {
    const res = await apiUrl.post(`/posts`, post, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${post._boundary}`,
      },
    });
    console.log(res);
    dispatch({
      type: SET_ADD_Post,
      payload: post,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
