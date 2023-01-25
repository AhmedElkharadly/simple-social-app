import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getPosts } from "./store/actions/getPosts";
import PostDetails from "./Pages/PostPage/PostDetails";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  // console.log(posts);
  return (
    <>
      <Header />
      <div className="App">
      <Routes>
          <Route exact path="posts" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route  path="*" element={<h1>Error 404 Not Found</h1>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
