import React from 'react';


function Playlist({playlist}) {

return (
<div>
    <input></input>
    <div className="tracks">{playlist}</div>
    <button>Save to Spotify</button>
</div>
)
}

export default Playlist;