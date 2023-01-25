import React from "react";
import "./postdetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getOnePost } from "../../store/actions/getOnePost";
import { NavLink, useParams } from "react-router-dom";
import CustButton from "../../Components/Button/Button";
import CommentsCart from "../../Components/CommentsCart/CommentsCart";
import AvatarName from "../../Components/AvatarName/AvatarName";
import { getOnePostComments } from "../../store/actions/getComments";

export default function PostDetails() {
  const dispach = useDispatch();
  const [checker, setChecker] = useState(0);
  const params = useParams();
  const getPost = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.postComment.postComments);

  const handleChecker = () => {
    if (getPost == {} || comments == [])
      return (
        dispach(getOnePostComments(params.id)),
        // dispach(getOnePost(params.id)),
        console.log(getPost)
      );
    else setChecker(checker + 1);
  };

  useEffect(() => {
    dispach(getOnePost(params.id));
    dispach(getOnePost(params.id));
  }, [checker]);

  return (
    <>
      <NavLink className="Back" to="/posts">
        All Posts
      </NavLink>
      <div className="cardDetailsContainer  flex-wrap">
        <div className="d-flex align-items-center w-100 justify-content-center">
          <img
            className="sideImge"
            src="/dummy-image.jpg"
            alt={getPost.title}
          />

          <div className="detailsContainer">
            <AvatarName />
            <h2>{getPost.title}</h2>
            <p>{getPost.body}</p>
          </div>
        </div>
        <div className="d-flex flex-column px-3 ">
          <h4>Comments</h4>
          {comments.map((myComment) => {
            console.log(myComment);
            return (
              <div className="p-3" key={myComment.id}>
                <AvatarName name={myComment.name} email={myComment.email} />
                <div className="px-5">{myComment.body}</div>
              </div>
            );
          })}
        </div>
        <div>
          <CustButton HBC={handleChecker} />
        </div>
      </div>
    </>
  );
}
