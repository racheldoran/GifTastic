$(document).ready(function () {
  console.log("yooooo girl!");



  var gif = ["Bob Dylan", "Waylon Jennings", "Tom Petty"];


  // Function for dumping the JSON content for each button into the div
  $("button").on("click", function () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=MuglAHZY6tEW36wfJ2k6Alpr9UM1eaKg&limit=10";
    console.log(queryURL)

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

          var a = $("#add-gif").prepend(response.data)

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);

        }

      })
  })

  var displayGif = $("img")

  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < displayGif.length; i++) {

      var a = $("<button>");
      a.addClass("gif");
      a.attr("data-person", displayGif[i]);
      a.text(displayGif[i])
      $("#buttons-view").append(a);
    }
  }

  $("#add-gif").on("click", function (event) {
    event.preventDefault();
    var giffy = $("#gif-input").val().trim();
    displayGif.push(giffy);
    console.log(giffy)
  

    renderButtons();

  });
  renderButtons();
});

