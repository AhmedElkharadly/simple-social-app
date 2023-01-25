import React from "react";

export default function AvatarName() {
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
            <span className="displayname">Ahmed Ehab Elkharadly</span>
            <span className="username">ahmed.e.elkharadly@gmail.com</span>
          </section>
        </div>
    </>
  );
}
