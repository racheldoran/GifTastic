$(document).ready(function () {
    console.log("yooooo girl!");
});


var gif = ["Bob Dylan", "Waylon Jennings", "Marshall Tucker Band", "The Doobie Brothers"];

// Function for dumping the JSON content for each button into the div
function displaygifInfo() {

  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#buttons-view").text(JSON.stringify(response));
  });
}

// Function for displaying movie data
function renderButtons() {

  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < gif.length; i++) {

    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("giffy");
    // Adding a data-attribute
    a.attr("data-name", gif[i]);
    // Providing the initial button text
    a.text(gif[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var gif = $("#gif-input").val().trim();

  // Adding the movie from the textbox to our array
  gif.push(gif);
  console.log(gif);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
$(document).on("click", ".movie", displaygifInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();