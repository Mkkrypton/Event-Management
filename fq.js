$(document).ready(function () {
  $(".faq-question").click(function () {
    // Toggle the clicked answer
    $(this).next(".faq-answer").slideToggle();

    // Change the icon immediately when the button is clicked
    const currentIcon = $(this).children(".icon").text();
    $(this).children(".icon").text(currentIcon === "+" ? "-" : "+");
  });
});
