// JavaScript to handle closing the sidebar
function closeSidebar() {
  document.querySelector('.sidebar').style.width = '0';
}
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// Function to add a new comment with name, comment, and timestamp
function addComment(name, comment) {
  var commentsDiv = document.getElementById("comments");
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString(); // Get a string representation of the current time
  var dateTime = date + " " + time; // Combine date and time
  var commentDiv = document.createElement("div");
  commentDiv.innerHTML = "<article class='comment'><strong>" + name + ":</strong> " + comment + " | <span class='date'>" + date + "</span></article>";
  commentsDiv.appendChild(commentDiv);
}

document.getElementById("comment-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var commentTextarea = document.getElementById("comment");
  var name = nameInput.value.trim(); // Get the name text
  var comment = commentTextarea.value.trim();
  if (name !== "" && comment !== "") { // Check if both name and comment are provided
    addComment(name, comment);
    nameInput.value = ""; // Clear the name input field
    commentTextarea.value = "";
  } else {
    alert("Please enter your name and comment."); // Alert if either name or comment is empty
  }
});
// Image Zoom
document.addEventListener('DOMContentLoaded', function () {
  mediumZoom('[data-zoomable]');
});
