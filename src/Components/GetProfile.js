import React, {useState} from 'react';


function GetProfile ( {token, userID, setUserID} ) {

    const getID = async () => {

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

    }
return (
    <div>
        <button className="getID" onClick={getID}>USER-ID</button>
    </div>
)


}

export default GetProfile;