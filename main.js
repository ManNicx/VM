$(document).ready(function() {
  $("#sendButton").click(function() {
    var answer = confirm("MAG SEND KA?");
    if (answer) {
      $("#question").hide();
      $("#sendButton").hide();
      $("#responsePage").removeClass("hidden");
    } else {
      alertLoop();
    }
  });

  function alertLoop() {
    var answer = confirm("MAG SEND KA?");
    if (!answer) {
      alertLoop();
    }
  }
});
