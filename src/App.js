import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
// import SidebarOption from './SidebarOption'
import Feed from './Feed'
import Widgets from './Widgets'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';

const App = () => {
  return (
    <div className="app">
      
      <Sidebar />

      <Feed />
      
      <Widgets />

    </div>
  )
}

export default App
