//cost calculation: when adults, check-in, or check-out inputs are changed, the days textbox will update with the number of days between check-out and check-in and the cost textbox will update with the cost of the booking which will be $150 * # of adults * # of days

function daysAndCost(e) {
  if ($("#checkIn").val() && $("#checkOut").val()) {
    let startDate = moment($("#checkIn").val());
    let endDate = moment($("#checkOut").val());
    let numDays = Math.ceil(moment.duration(endDate.diff(startDate)).asDays());
    $("#days").val(numDays);
    if ($("#adultDropDown").find(":selected").val()) {
      let numAdults = $("#adultDropDown").val();
      $("#cost").val(150 * numDays * numAdults);
    }
  }
}

// Event Handlers for checkin and checkout
$("#checkIn").on("change", function (e) {
  daysAndCost(e);
});

$("#checkOut").on("change", function (e) {
  daysAndCost(e);
});

$("#adultDropDown").on("change", function (e) {
  daysAndCost(e);
});

//reset button :clears all fields on the form and displays a blue info toaster notifying the user that the fields were successfully cleared
function reset() {
  $("#userName").get(0).reset();
  $("#firstName").get(0).reset();
  $("#lastName").get(0).reset();
  $("#phone").get(0).reset();
  $("#fax").get(0).reset();
  $("#email").get(0).reset();
  $("#days").get(0).reset();
  $("#cost").get(0).reset();
  $("#adultDropDown").get(0).reset();
  $("#checkIn").get(0).reset();
  $("#checkOut").get(0).reset();
  $("#message").get(0).reset();
  $("#range").get(0).reset();
  $("#low").get(0).reset();
  $("#med").get(0).reset();
  $("#high").get(0).reset();
}

$("#resetButton").on("click", function (e) {
  toastr["info"]("Fields reset successfully");
  reset();
});

//submit button:validate the username, first, last, phone, fax, and email fields for empty entries and if they don't exist, to highlight red the empty textbox (using the bootstrap .removeClass('has-error') and .addClass('has-error') as needed) and notify the user with a red error toaster displaying the field that it is missing
// also check to see if the cost was calculated and if it is not, notify user with a red error toaster that no cost was calculated
//also check to see if the cost was positive and if it is not, notify user with a red error toaster that cost is negative

//if submit button passes all validation errors, it will display a green success toaster saying the form was successfully submitted
function submit() {
  let anyError = false;
  if (!$("#cost").val()) {
    anyError = true;
    toastr["error"]("No cost was calculated");
  }
  if ($("#cost").val() < 0) {
    anyError = true;
    toastr["error"]("Cost is negative");
  }
  //check emptyness
  if (!$("#userName").val()) {
    anyError = true;
    toastr["error"]("Username is required");
    $("#userName").addClass("has-error");
  }
  if (!$("#firstName").val()) {
    anyError = true;
    toastr["error"]("First name is required");
    $("#firstName").addClass("has-error");
  }
  if (!$("#lastName").val()) {
    anyError = true;
    toastr["error"]("Last name is required");
    $("#lastName").addClass("has-error");
  }
  if (!$("#phone").val()) {
    anyError = true;
    toastr["error"]("Phone number is required");
    $("#phone").addClass("has-error");
  }
  if (!$("#fax").val()) {
    anyError = true;
    toastr["error"]("Fax number is required");
    $("#fax").addClass("has-error");
  }
  if (!$("#email").val()) {
    anyError = true;
    toastr["error"]("Email is required");
    $("#email").addClass("has-error");
  }

  if (!anyError) {
    toastr["success"]("The form is successfully submitted!");
  }
}

//When submit button clicked do validation submit function
$("#submitButton").on("click", function (e) {
  e.preventDefault();
  submit();
});

//Removing errors
$("#userName").on("change", function (e) {
  if ($("#userName").hasClass("has-error")) {
    $("#userName").removeClass("has-error");
  }
});

$("#firstName").on("change", function (e) {
  if ($("#firstName").hasClass("has-error")) {
    $("#firstName").removeClass("has-error");
  }
});

$("#lastName").on("change", function (e) {
  if ($("#lastName").hasClass("has-error")) {
    $("#lastName").removeClass("has-error");
  }
});

$("#phone").on("change", function (e) {
  if ($("#phone").hasClass("has-error")) {
    $("#phone").removeClass("has-error");
  }
});

$("#fax").on("change", function (e) {
  if ($("#fax").hasClass("has-error")) {
    $("#fax").removeClass("has-error");
  }
});

$("#email").on("change", function (e) {
  if ($("#email").hasClass("has-error")) {
    $("#email").removeClass("has-error");
  }
});
