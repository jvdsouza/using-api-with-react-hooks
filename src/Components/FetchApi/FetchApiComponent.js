import React, { useState, useEffect } from 'react';
import './FetchApiComponent.scss';

const FetchApiComponent = () => {
    // we set our variables and methods to update our variables here
    // these variables (ie urlLink and fetchedData) are known as the State of this component
    const urlLink = useState('https://jsonplaceholder.typicode.com/todos/1');
    // setFetchedData here is a method we'll use in a little bit to update the variable 'fetchedData'
    // these can be named however you want
    // however the variable that stores information goes first, and the function that updates the variable
    // always goes second in a list format
    const [fetchedData, setFetchedData] = useState('loading data');
    // We dont need to have a method for the urlLink to update it as we dont plan to update it, which is why
    // only the variable is there.


    // We will use the useEffect method in order to pull data after the component has loaded for the user
    useEffect(() => {
        // the fetch function is a web API that is available in all javascript engines run by browsers
        fetch(urlLink[0]) //the useState stores the variable and extra information in an array, we only need the first part of that array
            // the 'then' function is a method of the fetch function, which will allow us to use
            // information we just got from fetch and do something with it.
            // in this case we're converting the raw text from the API into a json format
            // which will allow us to use it like an Object in javascript, or similarly as a
            // 'dictionary' in python, which consists of key-pair values
            .then(response => response.json())
            // Since react does not allow data to be stored in Objects or key-value pairs, we extract
            // the title to show. We then use the 'setFetchedData' method to update the 'fetchedData'
            // variable from what we set it as before (being 'loading data') to have the information
            // we fetched
            .then(json => setFetchedData(json.title));
    })

    return(
        // here we return what we wish to render in the browser
        <div className="data">{ fetchedData }</div>
    )
}

export default FetchApiComponent;