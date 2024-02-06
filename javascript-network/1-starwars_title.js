// Importing the request module
const request = require('request');

// Retrieving the movie ID from the command line argument
const movieId = process.argv[2];

// Constructing the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Making a GET request to the Star Wars API endpoint
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parsing the response body to extract the title of the movie
        const movieData = JSON.parse(body);
        const movieTitle = movieData.title;

        // Printing the title of the movie
        console.log(movieTitle);
    }
});
