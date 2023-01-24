import React, { useState } from "react";
import CustButton from "../Button/Button";
import { twiticon } from "../svg";
import {useNavigate } from 'react-router-dom'
import "./header.css";
import PostForm from "../PostForm/PostForm";

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate() 

  const handleClose = () => {
    setShow(false)
    navigate('/posts')
  };
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-between align-items-center p-2 px-4 w-100 position-fixed top-0  header">
      <section>{twiticon}</section>
      <h1>Objects SocialApp</h1>
      <CustButton
        h="3em"
        w="10em"
        name="Add Post"
        HBC={handleShow}
        bgColor="black"
      />
          <PostForm show={show} handleClose={handleClose} handleShow={handleShow} />
      
    </div>
  );
}

export default Header;
