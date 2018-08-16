import React from 'react'

const Buttons = ({ retweet, like }) => (
    <div>
        <span><i className="fas fa-reply"></i></span>
        <span><i className="fas fa-retweet"> {retweet}</i></span>
        <span><i className="fas fa-heart"> {like}</i></span>
        <span><i className="fas fa-ellipsis-h"></i> </span>
    </div>
)

export default Buttons