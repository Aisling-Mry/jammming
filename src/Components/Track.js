import React from 'react';

function Track(props) {
    const { name, artists, album, id } = props.trackObject;
return (
    <div>
        <h1>{name}</h1>
        <p>{artists.map(artist => artist.name).join(', ')}</p>
        <p>{album.name}</p>
        <p>{id}</p>
    </div>
);

};

export default Track;