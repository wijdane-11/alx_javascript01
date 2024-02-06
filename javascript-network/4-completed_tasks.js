// Importing the request module
const request = require('request');

// Retrieving the API URL from the command line argument
const apiUrl = process.argv[2];

// Making a GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parsing the response body to extract the tasks data
        const tasks = JSON.parse(body);

        // Filtering completed tasks and counting them by user ID
        const completedTasksByUser = {};
        tasks.forEach(task => {
            if (task.completed) {
                if (completedTasksByUser[task.userId]) {
                    completedTasksByUser[task.userId]++;
                } else {
                    completedTasksByUser[task.userId] = 1;
                }
            }
        });

        // Printing the number of completed tasks by user ID
        console.log(completedTasksByUser);
    }
});
