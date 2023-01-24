import React from "react";
import "./home.css";
import PostCard from "../../Components/PostCard/PostCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/getPosts";
import CommentsCart from "../../Components/CommentsCart/CommentsCart";
import { getOnePost } from "../../store/actions/getComments";
// import { lazy, Suspense } from 'react'
// const PostCard = lazy(()=> import("../../Components/PostCard/PostCard"))

export default function Home() {
  const [postComments, setPostComments] = useState([]);
  const [postId, setPostId] = useState();
  const posts = useSelector((state) => state.posts.list);
  const comments = useSelector((state) => state.postComment.postComments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    dispatch(getOnePost(postId))
    setPostComments(comments);
    console.log(comments)
  }, [postId]);

  const handlePostId = (id) => {
    setPostId(id);
  };

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
            <h3>Post Comments</h3>
            {postComments.map((myComment, index) => {
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
        </div>
      </div>
    </div>
  );
}
