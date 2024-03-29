import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

const state = {
  robots: robots,
  searchfield: ''
}

const App = () => {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots}/>
    </div>
  );
}
 
export default App;

