// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
  
  // Make a request to the counter  endpoint
  
  // Capture the response and store it in variable
  
  // Render the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHtml = counter.toString();
};