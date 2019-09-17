

$(document).ready(function () {
  console.log("yooooo girl!");

  var gif = ["Bob Dylan", "Waylon Jennings", "Tom Petty"];

  function display() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=MuglAHZY6tEW36wfJ2k6Alpr9UM1eaKg&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        console.log(response)
        console.log(results)

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var a = $("#add-gif").append(results.data)

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height_still.url);

          gifDiv.append(p);
          gifDiv.append(personImage);
          a.addClass(personImage)

          $("#gifs-here").prepend(gifDiv);



        }

      })
  }

  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < gif.length; i++) {

      var a = $("<button>");
      a.addClass("gif");
      a.attr("data-person", gif[i]);
      a.text(gif[i])
      $("#buttons-view").append(a);
    }
  }

  $("#add-gif").on("click", function (event) {
    event.preventDefault();
    var giffy = $("#gif-input").val().trim();
    gif.push(giffy);


    renderButtons();

  });


  $("gif").on("click", function () {
   
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }

  })

  renderButtons();

  $(document).on("click", ".gif", display);
})
