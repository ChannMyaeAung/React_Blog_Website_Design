import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src={require("../../components/topbar/older_posts/older_posts_4.jpg")} 
            alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
            </div>
            <div className="writeFormGroup">
            <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
            />
            </div>
            <button className="writeSubmit" type="submit">
            Publish
            </button>
      </form>
    </div>
  )
}

export default Write