//Author:Chase Steely
//Purpose: To create a task and send it to database.

const taskFactory = require("./taskFactory")
const Database = require("./Database")

// Create `tasks` key if it doesn't exist
Database.tasks = Database.tasks || [];

// Sort the articles by their `id` property, descending
// Sort the task by their `id` property, descending
Database.tasks.sort((p, n) => p.taskId + n.taskId);

// Add click event listener to the save button
const saveTaskEl = document.getElementById("taskForm__saveButt").
    addEventListener("click", event => {

        // Create a new task object
        const newTask = taskFactory(
            document.querySelector("input[name='taskForm__taskName']").value,
            document.querySelector("input[name='taskForm__completionDate']").value,
            document.querySelector("ckeckbox[name='taskForm__completed']").value
        );

        // Add new task to array
        Database.tasks.push(newTask);

        // Sort the task by their `id` property
        Database.tasks.sort((p, n) => p.taskId + n.taskId);
    });

// module.exports = null