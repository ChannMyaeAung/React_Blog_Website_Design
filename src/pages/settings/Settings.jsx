import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './settings.css'


const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img 
                src={require('../../images/featured/featured-1.jpg')} 
                alt=""
              />

              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>

              <input 
                type="file"
                id='fileInput'
                style={{display:"none"}} 
              />
            </div>

            <label htmlFor="">Username</label>
            <input 
              type="text" 
              placeholder='ChanMyaeAung'
            />

            <label htmlFor="">Email</label>
            <input 
              type="email" 
              placeholder='chanmyaeaung@gmail.com'
            />

            <label htmlFor="">Password</label>
            <input 
              type="password" 
            />
            <br/>
            
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar/>
    </div>
  )
}

export default Settings