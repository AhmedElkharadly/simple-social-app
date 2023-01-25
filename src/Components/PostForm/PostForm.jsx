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
  const navigate = useNavigate();

  const [display, sitDisplay] = useState(false);

  const dispach = useDispatch();

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
    });
    sitDisplay(false);
  };
  const handleBodyChange = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    });
    sitDisplay(false);
  };

  const discard = () => {
    setInputs({ ...inputs, title: "", body: "" });
    return;
  };

  const handleSubmit = () => {
    if (inputs.title && inputs.body)
      return (
        dispach(addPost(inputs)),
        navigate("/"),
        props.handleClose(),
        setInputs({ ...inputs, title: "", body: "" })
      );
    else sitDisplay(true);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <form className="dropForm">
          <Modal.Header closeButton>
            <Modal.Title>Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className={
                display ? "alert alert-danger displayed" : "notDisplayed"
              }
            >
              Please Fill the Title and the Body of your Post
            </div>
            <div className="mb-3">
              <label htmlFor="assetName" className="form-label">
                Title
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="assetName"
                placeholder="Title"
                value={inputs.title}
                onChange={handleTitleChange}
              />
              <label htmlFor="assetQuantity" className="form-label">
                Body
              </label>
              <textarea
                required
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
                <b className="upaimage">Upload Image</b>
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
            <Button
              variant="secondary"
              onMouseUp={props.handleClose}
              onClick={discard}
            >
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
