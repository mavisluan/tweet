import React from 'react';
import Card from './Card'
import './App.css';
import { tweets } from './static-data'

const Tweet = () => (
  <ul className='tweet'>
    {tweets.map(tweet => (
      <li key={tweet.id}>
        <Card item={tweet}/>
      </li>
    ))}
  </ul>
)
export default Tweet;
