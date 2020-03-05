$(document).ready(function() {

    $(review).on("submit", function() {
      var formValid = true;

      if($("#name").prop("validity").valid) {
        $("#name_error").addClass("hidden");
      } else {
        $("#name_error").removeClass("hidden");
        formValid = false;
      }

      if($("#age").prop("validity").valid) {
        $("#age_error").addClass("hidden");
      } else {
        $("#age_error").removeClass("hidden");
        formValid = false;
      }

      /* Source: https://api.jquery.com/selected-selector/ for finding the .filter(':selected').val() method*/
      if ($("#recipe option").filter(':selected').val() != "") {
        $("#recipe_error").addClass("hidden");
      } else {
        $("#recipe_error").removeClass("hidden");
        formValid = false;
      }

      /* Source: https://api.jquery.com/selected-selector/ for finding the .filter(':selected').val() method */
      if ($("#rating option").filter(':selected').val() != "") {
        $("#rating_error").addClass("hidden");
      } else {
        $("#rating_error").removeClass("hidden");
        formValid = false;
      }
      return formValid;
    });

});
