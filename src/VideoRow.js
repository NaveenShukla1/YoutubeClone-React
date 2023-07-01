import React from 'react'
import './VideoRow.css'
function VideoRow({views, subscribers, description, timestamp, channel, title, image }) {

  return (
    <div className='videoRow'>
        <img src={image} alt="" />
        <div className="videoRow__text"><h3>{title}
        <p className="videoRow__description"> {channel} . {subscribers} Subscribers . {views} views {timestamp} ago</p>
        <p className="videoRow__description">{description}</p>
        </h3></div> 
      
    </div>
  )
}

export default VideoRow
