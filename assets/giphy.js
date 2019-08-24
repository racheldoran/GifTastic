$(document).ready(function () {
    console.log("yooooo girl!");
});


var gif = ["Bob Dylan", "Waylon Jennings", "Tom Petty"];


// Function for dumping the JSON content for each button into the div
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=MuglAHZY6tEW36wfJ2k6Alpr9UM1eaKg&limit=10";
     console.log(queryURL)

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(response)
        console.log(results)

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var a = $("#add-gif").prepend(response.data)

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
          
          renderButtons();
        }
      
      })
    })

    var displayGif = ["Bob Dylan"];

    // Generic function for capturing the movie name from the data-attribute
    function alertgifName() {
      var displayGif = $(this).attr("data-name");
      
    }

    // Function for displaying movie data
    function renderButtons() {

      // Deleting the movies prior to adding new movies
      // (this is necessary otherwise we will have repeat buttons)
      $("#buttons-view").empty();

      // Looping through the array of movies
      for (var i = 0; i < displayGif.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("gif");
        // Adding a data-attribute
        a.attr("data-name", displayGif[i]);
        // Providing the initial button text
        a.text(displayGif[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
      }
    }

    // This function handles events where one button is clicked
    $("#add-movie").on("click", function(event) {
      // Preventing the buttons default behavior when clicked (which is submitting a form)
      event.preventDefault();
      // This line grabs the input from the textbox
      var giffy = $("#gif-input").val().trim();

      // Adding the movie from the textbox to our array
      displayGif.push(giffy);

      // Calling renderButtons which handles the processing of our movie array
      renderButtons();

    });
  