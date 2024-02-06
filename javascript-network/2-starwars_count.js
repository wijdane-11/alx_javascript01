// Importing the request module
const request = require('request');

// Retrieving the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = '18';

// Making a GET request to the Star Wars API endpoint
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parsing the response body to extract the films data
        const filmsData = JSON.parse(body).results;

        // Counting the number of movies where Wedge Antilles is present
        let count = 0;
        for (const film of filmsData) {
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                count++;
            }
        }

        // Printing the count of movies
        console.log(count);
    }
});
