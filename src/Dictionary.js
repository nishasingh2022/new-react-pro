import React, {useState} from"react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary()
{
    let [keyWord, setKeyword]=useState("");
    function handleResponse(response){
        console.log(response.data[0]);
    }

   function search(event)
   {
    event.preventDefault();
    alert('Searching for ${keyWord} definition');
    // declration  of documention 
    let apiurl="https://api.dictionaryapi.dev/api/v2/entries/en/sunset";
    axios.get(apiurl).then(handleResponse);
   }

function handleKeywordChange(event) 
{
    setKeyword(event.target.value);
}
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type ="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    );
}