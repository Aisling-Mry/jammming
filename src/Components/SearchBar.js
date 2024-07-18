import React, {useState} from 'react';
import "../Styles/SearchBar.css";

function SearchBar( {token, queryResults, setQueryResults}) {

const [userInput, setUserInput] = useState("");
const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(userInput)
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "https://api.spotify.com/v1/search?q="
    const params = "&type=track"
    const urlToFetch = `${endpoint}${encodeURIComponent(userInput)}${params}`
    
    try {
        console.log('hello', token)
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${token}`
        }
    });
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        setQueryResults(data)
      }
    }
    catch(error) {
        console.log(error);
    }
}

    return (
        <form className="search">
           <input type='text' onChange={handleChange}/>
           <button type="submit" onClick={handleSubmit} className="searchButton">Search</button>
          </form>
    )

}

export default SearchBar; 