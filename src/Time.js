import React from 'react'
import moment from 'moment'

const Time = ({ time }) => {
    const timeString = moment(time).fromNow()
    return <span className="text-black-50"> &middot; {timeString}</span>
}

export default Time
