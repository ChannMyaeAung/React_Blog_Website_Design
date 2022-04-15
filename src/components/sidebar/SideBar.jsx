import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={require("./quick_read_1.jpg")} alt="" width={300} height={300}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque aliquam eos odit vel fuga ex quam iste aperiam, 
                dolorem nemo! Neque temporibus nobis rerum quam atque 
                mollitia doloremque in adipisci.
            </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </div>
        </div>
    </div>
  )
}

export default SideBar