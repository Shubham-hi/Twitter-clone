import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
      <SearchIcon className='widgets__searchIcon' />
      <input type="text" placeholder='Search Twitter' />
      </div>

      <div className='widgets__widgetsContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'933354946111705097'} />
        
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Motivation"
            options={{height: 400}}
        />
        
        <TwitterShareButton
          url={'https://facebook.com/shubhamBansal'}
          options={{ text: '#reactjs is awesome', via: 'ShubhamBansal' }}
        />

      </div>
    </div>
  )
}

export default Widgets

