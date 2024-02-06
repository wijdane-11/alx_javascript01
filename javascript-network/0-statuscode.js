// Importing the request module
const request = require('request');

// Retrieving the URL from the command line argument
const url = process.argv[2];

// Making a GET request to the specified URL
request.get(url, (error, response) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // If successful, print the status code
        console.log(`code: ${response.statusCode}`);
    }
});
