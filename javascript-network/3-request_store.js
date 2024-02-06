// Importing required modules
const request = require('request');
const fs = require('fs');

// Retrieving the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Making a GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Writing the contents of the webpage to the specified file
        fs.writeFile(filePath, body, 'utf-8', (err) => {
            if (err) {
                // If there's an error writing the file, print it
                console.error(err);
            } else {
                // Print a success message
                console.log(`Web content saved to ${filePath}`);
            }
        });
    }
});
