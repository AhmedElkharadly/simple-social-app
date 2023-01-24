import React from "react";
import "./postcard.css";
import { commentIc, likeIc, shareIc } from "../svg";

export default function PostCard(props) {
  return (
    <>
      <div
        // className='bg-white w-50 py-4 px-2'
        className="post w-75 py-4 px-2"
      >
        <div
          // className=''
          className="photo avatar"
        >
          <img alt="Avatar" className="avatar imgs" src={props.avatar} />
        </div>
        <div
          //  className='w-100'
          className="post_body"
        >
          <div className="post_header">
            <div
              className="post_text "
              // className='w-100  d-flex flex-column '
            >
              <span className="displayname">Name: {props.name}</span>
              <span className="username">
                userName: {props.username} {props.timeset}{" "}
              </span>
            </div>
            <div className="post_headerDescription">
              <p>{props.text}</p>
              <br />
            </div>
          </div>
          <div className="post_img">
            <img className="imgg" src={props.pictures} />
          </div>
          <div className="post_footer w-100 d-flex justify-content-between">
            {likeIc} {commentIc} {shareIc}
          </div>
          <div className="h-50">Comments {props.comments}</div>
        </div>
      </div>
    </>
  );
}
