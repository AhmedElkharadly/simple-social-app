import { combineReducers } from "redux";
import { getPostCommentsReducer } from "./postComment";
import { addPostReducer } from "./addPost";
import { getPostsReducer } from "./allPosts";



export default combineReducers ({
    posts:getPostsReducer,
    postComment:getPostCommentsReducer,
    addPost:addPostReducer
})