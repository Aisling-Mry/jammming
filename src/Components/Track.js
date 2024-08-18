import React from 'react';
import './Track.css';

function Track(props) {
    const { name, artists, album, id, uri } = props.trackObject;

    const plusTrack = () => {
        props.addTrack(props.trackObject)
    }

return (
    <div className="Track">
        <div className="Track-content">
            <div className="Track-heading">{name}</div>
            <div>{artists.map(artist => artist.name).join(', ')}</div>
            <div>{album.name}</div>
            <div className="track-id">{id}</div>
            <div className="track-uri">{uri}</div>
        </div>
        <div className="button">
            <button onClick={plusTrack}>+</button>
        </div>
    </div>
);

};

export default Track;