import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./store/actions/getPosts";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
