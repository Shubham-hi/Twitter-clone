import React, { forwardRef } from 'react'

import "./Post.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(({

    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {

    return (
    
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar} />
        </div>
        <div div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>{displayName}{" "}
                        <spa className="post__headerSpecial">
                            {verified && <VerifiedIcon className="post__badge" />} @{username}
                        </spa>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
                <img src={image} alt="" />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
    )
});

export default Post
