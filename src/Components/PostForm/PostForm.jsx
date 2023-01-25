import React, { useState } from "react";
import "./postform.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addimgIc, deleteIc, trueIc } from "../svg";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/actions/addPost";
import { useNavigate } from "react-router-dom";

export default function PostForm(props) {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [image, setImage] = useState([]);

  const dispach = useDispatch()
  const navigate = useNavigate()

  const onImageChange = (e) => {
    setImage([...e.target.files]);
  };
  const deleteImage = (e) => {
    setImage([]);
  };
  
  const handleTitleChange = (e) => {
    setInputs({
      ...inputs,
      title: e.target.value,
    })
  }
  const handleBodyChange = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    })
  }

  const handleSubmit = () => {
    dispach(addPost(inputs))
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <form className="dropForm">
          <Modal.Header closeButton>
            <Modal.Title>Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="assetName" className="form-label">
                Title
              </label>
              <input
                type="email"
                className="form-control"
                id="assetName"
                placeholder="Title"
                value={inputs.title}
                onChange={handleTitleChange}
                />
              <label htmlFor="assetQuantity" className="form-label">
                Describe
              </label>
              <textarea
                type="email"
                className="form-control"
                id="assetQuantity"
                placeholder="What is Hapining ..."
                value={inputs.body}
                onChange={handleBodyChange}
              />
            </div>
            <label htmlFor="file-input" className="form-label">
              {addimgIc}
              {image.length > 0 ? (
                <b>
                  {" "}
                  {trueIc} {[image[0].name]}{" "}
                  <span onClick={deleteImage}>{deleteIc}</span>
                </b>
              ) : (
                <b>Upload Image</b>
              )}
            </label>
            <input
              className="visually-hidden"
              type="file"
              id="file-input"
              onChange={onImageChange}
              name="ImageStyle"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Discard
            </Button>
            <Button
              className="text-white"
              variant="dark"
              onClick={handleSubmit}
            >
              Add Post
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
