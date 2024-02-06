// Importing required modules
const request = require('request');
const fs = require('fs');

// Function to save content to a file
function saveToFile(url, filename) {
    // Making a GET request to the specified URL
    request.get(url, (error, response, body) => {
        if (error) {
            // If there's an error, print it
            console.error(error);
        } else {
            // Writing the contents of the webpage to the specified file
            fs.writeFile(filename, body, 'utf-8', (err) => {
                if (err) {
                    // If there's an error writing the file, print it
                    console.error(err);
                } else {
                    // Print a success message
                    console.log(`Web content saved to ${filename}`);
                }
            });
        }
    });
}

// URLs and filenames for each case
const cases = [
    { url: 'http://localhost:5050/route_0', filename: 'file_0', expectedContent: 'C is fun!' },
    { url: 'http://localhost:5050/route_1', filename: 'file_1', expectedContent: 'Lorem ipsum ...' }, // Placeholder for long Lorem Ipsum text
    { url: 'http://localhost:5050/route_2', filename: 'file_2', expectedContent: '' } // Empty expected content
];

// Loop through each case and save content to file
cases.forEach((testCase) => {
    saveToFile(testCase.url, testCase.filename);
});
