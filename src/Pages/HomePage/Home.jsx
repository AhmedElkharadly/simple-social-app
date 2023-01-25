import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/getPosts";
import PostCard from "../../Components/PostCard/PostCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const [postId, setPostId] = useState();
  const [postComments, setPostComments] = useState([]);
  const posts = useSelector((state) => state.posts.list);
  const comments = useSelector((state) => state.postComment.postComments);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="w-100 d-flex flex-column align-items-center ">
        {posts.map((post) => {
          return (
            <div  key={post.id}>
              <PostCard
                comments={() => navigate(`/posts/${post.id}`)}
                title={post.title}
                body={post.body}
              />
            </div>
          );
        })}
    </div>
  );
}
