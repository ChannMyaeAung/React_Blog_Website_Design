import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img src={require('./quick_read/quick_read_3.jpg')} alt="" className='headerImg'/>
    </div>
  )
}

export default Header