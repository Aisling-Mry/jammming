import React from 'react';
import Track from './Track'; 


function SearchResults( { queryResults, addTrack } ) {

    if (!queryResults || !queryResults.tracks || !Array.isArray(queryResults.tracks.items)) {
        return <div>Search for your favorite music!</div>;
    }
    const songs = queryResults.tracks.items;

    return (
        <div >
            {

            songs.map(item => (
            <Track key={item.id} trackObject={item} addTrack={addTrack}/>
        ) )
            }
        </div>
        );
    }
    
    export default SearchResults;