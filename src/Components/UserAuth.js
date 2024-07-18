import React, {useEffect, useState} from 'react';

function UserAuth( {token, setToken} ) {

    function Authenticate() {
        const client_id = 'f73758cc3181424b815e5ca7d9b7098c';
        const redirect_uri = 'http://localhost:3000';
        const scopes = 'user-read-private user-read-email playlist-modify-private';

        let url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scopes)}`;
       
        window.location.href = url;}
    
   
    
    useEffect (() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash); //Built in JavaScript class that can work with query string of URL to parse key/value pairs. 
        const accessToken = params.get('access_token');
        const expiry = params.get('expires_in');

        if (accessToken) {
            console.log(accessToken, expiry);
            setToken(accessToken)
        }
    }, []);
    


return (
    <div>
        <button onClick={Authenticate}>Click</button>
    </div>
);

}

export default UserAuth;