import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import UserAuth from './Components/UserAuth';
import React, {useState} from 'react';
import './App.css';



function App() {

  const [token, setToken] = useState('');
  const [queryResults, setQueryResults] = useState('hi');
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [userID, setUserID] = useState("test");

  
  function addTrack(track) {
    setPlaylist((prev) => [...prev, track]);
    console.log(playlist)
  }
  
  const handleNameChange = (e) => {
    setPlaylistName(e.target.value)
    console.log(playlistName)
  }

  function removeTrack(track) {
    setPlaylist(playlist.filter((item) => item.id !== track.id));
  }

  const handleSaveToSpotify = async () => { 
  console.log(userID)

  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
          Authorization: `Bearer ${token}`
              }
      });

  if (response.ok) {
  const data = await response.json()
  setUserID(data.id)
  console.log(userID)
  }
  }

  catch(error) {
      console.log(error);
  }

  //first get / set profile ID
  const user_id = userID;
  const trackURIs = playlist.map(track => track.uri);
  console.log('Track URIs:', trackURIs);
  let playlist_id;

  try { 
        const response = await fetch(
         `https://api.spotify.com/v1/users/${user_id}/playlists`, {
          method: 'POST',
          headers: {
                Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            name: playlistName,
            public: false
          })
        }
     );
        if (response.ok) {
            const playlistData = await response.json();
            console.log(playlistData);
            playlist_id = playlistData.id;
          }
      }
      catch(error) {console.log(error)}
  
  try {
      const playlistTracks = await fetch (
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uris: trackURIs
      })
    }
    );
    
  if (playlistTracks.ok) {
      const playlistTracksData = await playlistTracks.json();
      console.log('Tracks added to playlist:', playlistTracksData);
    }
  }
  catch(error) {console.log(error)}
  };




  return (
    <div className="app">
      <div className="heading-container">
        <header className="app-header">
          <h1 className="heading">Jamming</h1>
        </header>
      </div>
      
      <SearchBar token={token} setQueryResults={setQueryResults} queryResults={queryResults}/>

      <div className="contents">
      
      <div className="search-section">
        <h1 className="search-results-heading">Search Results</h1>
        <SearchResults  queryResults={queryResults} addTrack={addTrack}/> 
      </div>
      

      <div className="Playlist-section">
                  <div className="playlist-name">
                    <input className="playlist-name-input" type="text" placeholder="Playlist Name..." onChange={handleNameChange}/>
                  </div>
                {playlist.map((track, index) => (
                    <div key={index} className="track">
                        <div className="track_content">
                          <div className="track_heading">{track.name}</div>
                          <div>{track.artists.map(artist => artist.name).join(', ')}</div>
                          <div>{track.album.name}</div>
                         <div className="track-id">{track.id}</div>
                         <div className="track-uri">{track.uri}</div>
                        </div>
                        <div className="button">
                          <button onClick={() => removeTrack(track)}>-</button>
                        </div>
                    </div>
                    ))}
                    <button className="save-button" onClick={handleSaveToSpotify}>Save to Spotify</button>
                    </div>

      </div>
      
      
      <UserAuth token={token} setToken={setToken}/>
    


                      

    </div>
  );
}

export default App;


