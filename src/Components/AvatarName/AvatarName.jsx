import React from "react";

export default function AvatarName(props) {
  return (
    <>
      <div className="d-flex">
        <div className="photo avatar">
          <img
            alt="Avatar"
            className="avatar imgs"
            src="/user-dummy-image.jpg"
          />
        </div>
        <section className="post_text ">
          <span className="displayname">
            {props.name ? props.name : "Ahmed Ehab Elkharadly"}
          </span>
          <span className="username">
            {props.email ? props.email : "ahmed.e.elkharadly@gmail.com"}
          </span>
        </section>
      </div>
    </>
  );
}
