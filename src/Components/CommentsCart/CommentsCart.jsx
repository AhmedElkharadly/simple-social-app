import React from 'react'
import './commentscart.css'


export default function CommentsCart(props) {
  return (
    <div className='p-2 commentStyle'>
        <div className="d-flex  flex-row align-items-center">
          <img
            alt="Avatar"
            className="avatar"
            src="/user-dummy-image.jpg"
          />
          <div className='d-flex flex-wrap flex-column'>
            <b className='name'>{props.name}</b>
            <span className='usernamee'>{props.email}</span>
          </div>
        </div>
        <p>{props.body}</p>
    </div>
  )
}
