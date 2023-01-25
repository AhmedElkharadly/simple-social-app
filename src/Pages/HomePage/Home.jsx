import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/getPosts";
import PostCard from "../../Components/PostCard/PostCard";
import CommentsCart from "../../Components/CommentsCart/CommentsCart";
import { getOnePostComments } from "../../store/actions/getComments";
import CustButton from "../../Components/Button/Button";

export default function Home() {

  const dispatch = useDispatch();
  const [postId, setPostId] = useState();
  const [postComments, setPostComments] = useState([]);
  const posts = useSelector((state) => state.posts.list);
  const comments = useSelector((state) => state.postComment.postComments);

  const handlePostId = (id) => {
    setPostId(id);
  };

  const handleChecker = () => {
    (postComments.length == 0 || comments.length == 0)
    ? dispatch(getOnePostComments(postId))
    : dispatch(getOnePostComments(postId))
    }


  useEffect(() => {
    dispatch(getPosts());
    console.log(posts)
    setPostId(posts[0]?.id)
  }, []);

  useEffect(() => {
    dispatch(getOnePostComments(postId));
    setPostComments(comments);
  }, [postId]);
  

  return (
    <div className="d-flex align-items-baseline justify-content-arround">
      <div className="">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard
                comments={() => handlePostId(post.id)}
                title={post.title}
                body={post.body}
              />
            </div>
          );
        })}
      </div>
      <div className="rp_header">
        <div className="rp_content">
          <div className="catContainer d-flex flex-column align-items-center">
            <h4>Post Comments</h4>
            {postComments?.map((myComment, index) => {
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
            {postId ? (
              <Link className="showMore" to={"/posts/" + postId}>
                Show All ...
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <CustButton HBC={()=>handleChecker} />
    </div>
  );
}
