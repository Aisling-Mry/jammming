import SearchBar from './Components/SearchBar';
import './App.css';
import Playlist from './Components/Playlist';
import SearchResults from './Components/SearchResults';
import UserAuth from './Components/UserAuth';
import React, {useState} from 'react';

console.log('UserAuth component:', UserAuth);

function App() {

  const [token, setToken] = useState('')
  const [queryResults, setQueryResults] = useState('hi')

  function handleClick(e) {
    e.preventDefault();
    console.log(queryResults, queryResults.tracks.items)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Jamming</h1>
      </header>
      
      <SearchBar token={token} setQueryResults={setQueryResults} queryResults={queryResults}/>

      <div className="contents">
      
      <SearchResults className="Search-section" queryResults={queryResults}/> 
  

      <Playlist className="Playlist-section"/>
      </div>
       
    
      <UserAuth token={token} setToken={setToken}/>
    
      <button onClick={handleClick}>Test</button>

    </div>
  );
}

export default App;


