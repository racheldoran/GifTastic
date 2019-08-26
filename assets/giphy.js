

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
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(personImage);
          a.addClass(personImage)

          $("#gifs-here").append(gifDiv);
       


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
  renderButtons();

  $(document).on("click", ".gif", display);


})




