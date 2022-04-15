import React from 'react'
import './post.css'


const Post = () => {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src={require('./older_posts/older_posts_1.jpg')} 
            alt="" 
        />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>

            <span className="postTitle">
                Lorem ipsum dolor sit
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>

        <p className='postDesc'>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Illum, enim modi molestiae at 
            nemo dolor dolore alias? Fugiat rerum 
            deserunt minima error odio possimus quae, 
            unde eum iste omnis accusantium?
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Illum, enim modi molestiae at 
            nemo dolor dolore alias? Fugiat rerum 
            deserunt minima error odio possimus quae, 
            unde eum iste omnis accusantium?
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Illum, enim modi molestiae at 
            nemo dolor dolore alias? Fugiat rerum 
            deserunt minima error odio possimus quae, 
            unde eum iste omnis accusantium?
        </p>
    </div>
  )
}

export default Post