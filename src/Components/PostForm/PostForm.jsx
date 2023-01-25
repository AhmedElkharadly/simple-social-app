import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addimgIc, deleteIc, trueIc } from "../svg";

export default function PostForm(props) {
    const[image, setImage] = useState([])

    const onImageChange = (e) => {
        setImage([...e.target.files])
    } 
    const deleteImage = (e) => {
        setImage([])
    }

  return (
    <>
      <Modal className="formContainer" show={props.show} onHide={props.handleClose}>
          <form >
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
              />
              <label htmlFor="assetQuantity" className="form-label">
                Describe
              </label>
              <textarea
                type="email"
                className="form-control"
                id="assetQuantity"
                placeholder="What is Hapining ..."
              />
            </div>
            <label htmlFor="file-input" className="form-label">
                {addimgIc} 
                { image.length>0? <b> {trueIc} {[image[0].name]} <span onClick={deleteImage}>{deleteIc}</span></b> : <b>Upload Image</b>}
              </label>
            <input className="visually-hidden" type="file" id="file-input" onChange={onImageChange} name="ImageStyle"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Discard
          </Button>
          <Button className="text-white " onClick={(props.handleClose)}>
            Add Post
          </Button>
        </Modal.Footer>
          </form>
      </Modal>
    </>
  );
}
