//your JS code here. If required.
// Create an object called student with a property called name
const student = {
    name: "John"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
    // Use Object.keys to get an array of keys in the object
    return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']

