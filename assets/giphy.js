

$(document).ready(function () {
  console.log("yooooo girl!");

  var gif = ["Bob Dylan", "Waylon Jennings", "Tom Petty"];

  function display () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=MuglAHZY6tEW36wfJ2k6Alpr9UM1eaKg&limit=10";
    console.log(queryURL)
    console.log(person)

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var response = response.data;
        console.log(response)
        console.log(results)

        for (var i = 0; i < response.length; i++) {
          var gifDiv = $("<div>");

          var rating = response[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var a = $("#add-gif").append(response.data)

          var personImage = $("<img>");
          personImage.attr("src", response[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(personImage);

          $("#buttons-view").append(gifDiv);

        }

      })
  }

  var displayGif = $("img")

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
    console.log(giffy)
    console.log(event)
  

    renderButtons();

  });
  renderButtons();

  $(document).on("click", display, displayGif);
  
})




