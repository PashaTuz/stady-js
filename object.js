// task 1
// Create a user object with properties firstName, lastName, and age.
// Get the value of firstName (e.g., user.firstName).
// Change the value of age.
// Create an Array of Objects where each object represents one item from the to-do list.
// Create the ToDoList array 
const user = {
    firstName: "Pavlo",
    lastName: "Tuz",
    age: 26
};
console.log(user);

const name = user.firstName;
const surname = user.lastName;
user.age = 27;
const liveAge = user.age;
console.log(name, surname, "After object change", liveAge);
// task 1

// ----------------------------------------------------------------------------------

// task 2
// 1. DATA: Array of objects (to-do list)
const ToDoList = [
    { title: "Go to the store", isDone: false },
    { title: "Prepare food", isDone: false },
    { title: "Clean the house", isDone: true },
    { title: "Work on programming languages study", isDone: true }
];

// 2. DOM-ELEMENTS: Find the input field, button, and list container
const newTaskInput = document.getElementById('newTaskInput');
const addButton = document.getElementById('addButton');
const ListContainer = document.getElementById('taskList');


// 3. FUNCTION: Renders the entire ToDoList array on the page
function displayTask() {
    // IMPORTANT: Clear the container before drawing the new list
    ListContainer.innerHTML = '';
    
    ToDoList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerText = task.title;

        if (task.isDone) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'gray';
        }
        
        ListContainer.appendChild(listItem);
    });
}


// 4. EVENTS: Handle click on the "Add" button
addButton.addEventListener('click', () => {
    const taskTitle = newTaskInput.value.trim(); 
    
    // Check if the field is not empty
    if (taskTitle !== '') {
        
        // A. ADDING DATA: Create a new object and add it to the array
        ToDoList.push({
            title: taskTitle,
            isDone: false
        });

        // B. CLEARING: Clear the input field
        newTaskInput.value = '';

        // C. DOM UPDATE: Redraw the entire list on the page
        displayTask(); 
    }
});


// 5. INITIAL CALL: Display initial data when the page loads
displayTask();
// task 2