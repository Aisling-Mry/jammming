import React from 'react';
import Track from './Track'; 


function SearchResults( { queryResults } ) {

    if (!queryResults || !queryResults.tracks || !Array.isArray(queryResults.tracks.items)) {
        return <div>Loading...</div>;
    }
    const songs = queryResults.tracks.items;

    return (
        <div className="results">
            {

            songs.map(item => (
            <Track key={item.id} trackObject={item}/>)
            
                )
            }
        </div>
        );
    }
    
    export default SearchResults;