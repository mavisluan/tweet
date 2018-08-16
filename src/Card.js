import React from 'react'
import Time from './Time'
const Card = ({ item: { id, userName, avatar, handleName, message, timeStamp, retweet, like} }) => (
    <div className='card'>
    <img className='card-avatar' src={avatar} height='80px' width='80px' alt={userName}/>
      <div className='card-info'>
        <span style={{ fontSize: 'large', fontWeight: 'bold', color: 'black'}}>{userName}</span>
        <span> @{handleName}</span>
        <Time time={timeStamp} />
        <p>{message}</p>
        <div className='card-buttons'>buttons</div>
      </div>
    </div>
  )

  export default Card