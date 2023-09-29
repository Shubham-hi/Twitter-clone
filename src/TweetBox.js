import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
  
    const db = getFirestore(); // Initialize Firestore
    const postsCollection = collection(db, 'posts');
  
    try {
      addDoc(postsCollection, {
        displayName: 'TridenSri',
        username: 'tri_denS',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://static.vecteezy.com/system/resources/thumbnails/022/248/787/small/krishna-psychedelic-8k-hd-close-up-face-on-black-background-generative-ai-photo.jpg',
      });
  
      // Clear input fields after successfully adding a tweet
      setTweetMessage('');
      setTweetImage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  


  return (
    <div className='tweetBox'>
      <form >
        <div className="tweetBox__input">
            <Avatar src='https://static.vecteezy.com/system/resources/thumbnails/022/248/787/small/krishna-psychedelic-8k-hd-close-up-face-on-black-background-generative-ai-photo.jpg'/>            
            <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} type='text' placeholder="Whats's happening?" />
        </div>

            <input onChange={(e)=> setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__imageInput' type='text' placeholder="Optional: Enter Image URL" />

        <Button onClick={sendTweet} type='submit' className='tweetBox_tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
