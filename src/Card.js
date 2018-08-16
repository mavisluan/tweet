import React from 'react'
import Time from './Time'
import Buttons from './Buttons'

const Card = ({ item: { userName, avatar, handleName, message, timeStamp, retweet, like} }) => (
    <div className='card'>
    <img className='card-avatar' src={avatar} height='80px' width='80px' alt={userName}/>
      <div className='card-info'>
        <span style={{ fontSize: 'large', fontWeight: 'bold', color: 'black'}}>{userName}</span>
        <span> @{handleName}</span>
        <Time time={timeStamp} />
        <p>{message}</p>
        <div className='card-buttons'>
            <Buttons retweet={retweet} like={like}/>
        </div>
      </div>
    </div>
  )

  export default Card