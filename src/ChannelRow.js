import React from 'react'
import { Avatar } from '@mui/material';
import './ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"


function ChannelRow({image, channel, noOfVideos, verified, subs, description}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={image}/>
        <div className='channelRow__text'>
            <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
            <p>{subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
            
        </div>
    
    </div>
  )
}

export default ChannelRow
