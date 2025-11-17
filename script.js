//your JS code here. If required.
// Get the target element
const element = document.getElementById("level");

// Start counting from the element itself
let count = 0;
let current = element;

// Traverse up the DOM tree until reaching null
while (current) {
    count++;
    current = current.parentElement;
}

// Display the result
alert("The level of the element is: " + count);
