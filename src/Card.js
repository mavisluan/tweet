import React from 'react'

const Card = ({ item: { id, userName, avatar, handleName, message, timeStamp, retweet, like} }) => (
    <div className='card'>
      <div className='card-avatar'>
        <img src={avatar} height='50px' width='50px' alt={userName}/>
      </div>
      <div className='card-info'>
        <span>{userName}</span>
        <span>{handleName}</span>
        <span>Time</span>
        <p>{message}</p>
        <div className='card-buttons'>buttons</div>
      </div>
    </div>
  )

  export default Card