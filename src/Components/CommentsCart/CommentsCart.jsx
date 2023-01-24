import React from 'react'
import './commentscart.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOnePost } from '../../store/actions/getComments'
export default function CommentsCart(props) {
  return (
    <div className='p-3 commentStyle'>
        <div className="d-flex flex-row align-items-center">
          <img
            alt="Avatar"
            className="avatar"
            src="user-dummy-image.jpg"
          />
          <div className='d-flex flex-column'>
            <b>{props.name}</b>
            <span className='username'>{props.email}</span>
          </div>
        </div>
        <p>{props.body}</p>
    </div>
  )
}
