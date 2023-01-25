import React from "react";
import "./postdetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getOnePost } from "../../store/actions/getOnePost";
import { NavLink, useParams } from "react-router-dom";
import CustButton from "../../Components/Button/Button";
import CommentsCart from "../../Components/CommentsCart/CommentsCart";
import AvatarName from "../../Components/AvatarName/AvatarName";

export default function PostDetails() {
  const dispach = useDispatch();
  const [checker, setChecker] = useState(0);
  const params = useParams();
  const getPost = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.postComment.postComments);

  const handleChecker = () => {
    if (getPost == {} || comments == [])
      return (
        dispach(getOnePost(params.id)),
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
      <div className="cardDetailsContainer">
        <div className="d-flex align-items-center w-100 justify-content-center">
          <img
            className="sideImge"
            src="/dummy-image.jpg"
            alt={getPost.title}
          />

          <div className="detailsContainer">
            <AvatarName/>
            <h2>{getPost.title}</h2>
            <p>{getPost.body}</p>
          </div>
          {comments.map((myComment, index) => {
            return index > 2 ? (
              <div key={myComment.id}>
                <CommentsCart
                  name={myComment.name}
                  email={myComment.email}
                  body={myComment.body}
                />
              </div>
            ) : (
              ""
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
