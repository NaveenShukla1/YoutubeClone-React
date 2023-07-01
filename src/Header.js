import React, {useState} from 'react'
import './Header.css'
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from "@mui/icons-material/Apps"
import NotificationsIcon from "@mui/icons-material/Notifications"
import Avatar from "@mui/material/Avatar"
import { Link } from 'react-router-dom'

function Header() {

  const [InputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon/>
      <Link to="/">
        <img className="header_logo" src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720946_640.png" alt="" />
      </Link>
      </div>
      
      
      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={InputSearch} placeholder='Search' type="text"  />
        <Link  to={`/search/${InputSearch}`}>
        <SearchIcon className='header__inputButton'/>   
        </Link>
         
      </div>  
      
      <div className="header__icons">
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar alt='Naveen Shukla' src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'/>
      </div>
      
    </div>
  )
}

export default Header
