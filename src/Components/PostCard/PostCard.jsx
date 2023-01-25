import React from "react";
import "./postcard.css";
import { commentIc, likeIc, shareIc } from "../svg";

export default function PostCard(props) {
  return (
    <>
      <div onClick={props.gotoPostDetails} className="post py-4 px-2 mx-3">
        <div className="photo avatar">
          <img
            alt="Avatar"
            className="avatar imgs"
            src="user-dummy-image.jpg"
            // src={post.avatar}   using dynamic avatar
          />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_text ">
              <span className="displayname">Ahmed Ehab Elkharadly</span>
              <span className="username">ahmed.e.elkharadly@gmail.com</span>
            </div>
            <div className="post_headerDescription">
              <h5 className="textTitle">{props.title}</h5>
              <p >{props.body}</p>
            </div>
          </div>
          <div className="post_img">
            <img
              className="imgg"
              src="dummy-image.jpg"
              // src={post.pictures} using dynamic Image
            />
          </div>
          <div className="post_footer ">
            {likeIc} 
            <span onClick={props.comments}>{commentIc}</span>
             {shareIc}
          </div>
        </div>
      </div>
    </>
  );
}
