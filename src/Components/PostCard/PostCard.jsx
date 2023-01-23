import React from 'react'
import { commentIc, likeIc, retweetIc, shareIc } from '../svg'

export default function PostCard(props) {
  return (
    <div>
        <div className='bg-white w-100 py-4 '>
            <div className='w-100'>
            <img 
                alt="" 
                className=''
                src={props.avatar}/>
            </div> 
            <div className='w-100'>
                <div className='w-100'>
                    <div className='w-100  d-flex col '>
                        <span className='w-100'>Name: {props.name}</span>
                        <span className='w-100'>userName: {props.username} {props.timeset} </span>
                        
                    </div>
                    <div className="w-100">
                        <p>{props.text}</p>
                        <br />
                    </div>
                </div>
                <div className='w-100'>
                    <img className='' src={props.pictures} />                  
                </div>
                <div className='w-100 d-flex justify-content-evenly'>
                {likeIc} {commentIc} {retweetIc} {shareIc}
                </div>
            </div>      
        </div>
        
    </div>
  )
}
