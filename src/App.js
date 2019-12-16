import React from 'react';
import Tweet from './Tweet'
import './App.css';
import {Container} from 'react-bootstrap';
import {tweets} from './static-data'
const App = () => (
  <Container className="p-3">
    {tweets.map(tweet => (
      <Tweet item={tweet}/>
    ))}
  </Container>
);
export default App;
