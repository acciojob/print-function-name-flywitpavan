function functionName() {
  alert(arguments.callee.name); // This will alert the name of the function
}

// Example of calling the function
functionName();  // This will show an alert with "functionName"
functionName();  // Alerts "functionName"
