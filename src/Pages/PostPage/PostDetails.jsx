import React from "react";
import "./postdetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getOnePost } from "../../store/actions/getOnePost";
import { NavLink, useParams } from "react-router-dom";
import CustButton from "../../Components/Button/Button";
import AvatarName from "../../Components/AvatarName/AvatarName";
import { useNavigate } from "react-router-dom";
import { getOnePostComments } from "../../store/actions/getComments";

export default function PostDetails() {
  const dispach = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [checker, setChecker] = useState(0);
  const getPost = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.postComment.postComments);

  const handleChecker = () => {
    if (getPost == {} || comments == [])
      return dispach(getOnePostComments(params.id));
    else setChecker(checker + 1);
  };
  const handleBackButton = () => {
    navigate("/");
  };
  useEffect(() => {
    dispach(getOnePost(params.id));
  }, []);
  useEffect(() => {
    dispach(getOnePostComments(params.id));
  }, [checker]);

  return (
    <>
      <div className="cardDetailsContainer flex-wrap">
        <CustButton
          HBC={handleBackButton}
          margin="20px"
          name="Home"
          bgColor="black"
          w="200px"
          h="40px"
        />
        <div className="d-flex align-items-center w-100 flex-wrap justify-content-center">
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
        <div className="d-flex flex-column px-5 py-3 ">
          <h4>Comments</h4>
          {comments.map((myComment) => {
            return (
              <div className="p-2 px-4 commentTable" key={myComment.id}>
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
