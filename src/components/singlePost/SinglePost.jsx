import React from 'react'
import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
                src={require('../topbar/older_posts/older_posts_2.jpg')} 
                alt="" 
                className="singlePostImg" 
            />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: <b>Chan Myae Aung</b>
                </span>

                <span className='singlePostDate'>
                    1 hour ago
                </span>
            </div>

            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quasi excepturi unde neque perspiciatis
                dolore! Iusto, ad nobis exercitationem blandit
                iis voluptatum odio reiciendis ipsa consequuntur 
                quaerat tempore, tempora rerum minima ea.
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quasi excepturi unde neque perspiciatis
                dolore! Iusto, ad nobis exercitationem blandit
                iis voluptatum odio reiciendis ipsa consequuntur 
                quaerat tempore, tempora rerum minima ea.
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quasi excepturi unde neque perspiciatis
                dolore! Iusto, ad nobis exercitationem blandit
                iis voluptatum odio reiciendis ipsa consequuntur 
                quaerat tempore, tempora rerum minima ea.
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quasi excepturi unde neque perspiciatis
                dolore! Iusto, ad nobis exercitationem blandit
                iis voluptatum odio reiciendis ipsa consequuntur 
                quaerat tempore, tempora rerum minima ea.
            </p>
        </div>
    </div>
  )
}

export default SinglePost