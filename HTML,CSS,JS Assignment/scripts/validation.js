// Individual Input fields contains  its
// own validation function for responsive forms.

// After an wrong format of input the text field
// value declared as null and again the focus goes to the
// same input field after an alert message.

// Finally the make payment method checks all required fields
// are not null and display payment successed message...!!!

// The validation meathods are directly called from the html form
// after there is change occurs in the input field

var Status = false;

// Validation for card number
function validateCardNumber() {
  var x = document.getElementById("txt-cardnumber");
  var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; // Card number should contain 13 or 16 digits
  if (!x.value.match(regex)) {
    document.getElementById("error-cardnumber").innerHTML =
      "Please enter valid card number.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-cardnumber").innerHTML = "";
    document.getElementById("lbl-cardnumber").innerHTML = "";
  }
}

// Validation for security code
function validateSecurityCode() {
  var x = document.getElementById("txt-securitycode");
  var regex = /[0-9]{3}/; // Security code should have 3 digits
  if (!x.value.match(regex)) {
    document.getElementById("error-securitycode").innerHTML =
      "Please enter valid security code";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-securitycode").innerHTML = "";
    document.getElementById("lbl-securitycode").innerHTML = "";
  }
}

// Validation for expiry month
function validateExpiryMonth() {
  var x = document.getElementById("month").selectedIndex;
  if (x === 0) {
    document.getElementById("error-expirydate").innerHTML =
      "Please select expiry date";
  } else {
    Status = true;
    document.getElementById("error-expirydate").innerHTML = "";
    document.getElementById("lbl-expirydate").innerHTML = "";
  }
}

// Validation for expiry year
function validateExpiryYear() {
  var y = document.getElementById("year").selectedIndex;
  if (y === 0) {
    document.getElementById("error-expirydate").innerHTML =
      "Please select expiry date";
  } else {
    Status = true;
    document.getElementById("error-expirydate").innerHTML = "";
    document.getElementById("lbl-expirydate").innerHTML = "";
  }
}

// Validation for card holder name
function validateName() {
  var x = document.getElementById("txt-name");
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-name").innerHTML = "Please enter valid name";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("lbl-name").innerHTML = "";
  }
}

// Validation for address 1
function validateAddress1() {
  var x = document.getElementById("txt-address1");
  var regex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-address1").innerHTML =
      "Please enter the valid address.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-address1").innerHTML = "";
    document.getElementById("lbl-address1").innerHTML = "";
  }
}

// Validation for address 2
function validateAddress2() {
  var x = document.getElementById("txt-address2");
  var regex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-address2").innerHTML =
      "Please enter the valid address.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-address2").innerHTML = "";
    document.getElementById("error-address2").innerHTML = "";
  }
}

// Validation for address 3
function validateAddress3() {
  var x = document.getElementById("txt-address3");
  var regex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-address3").innerHTML =
      "Please enter the valid address.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-address3").innerHTML = "";
    document.getElementById("lbl-address3").innerHTML = "";
  }
}

// Validation for town/city
function validateTown() {
  var x = document.getElementById("txt-town");
  var regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-town").innerHTML =
      "Please enter valid Town/City name";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-town").innerHTML = "";
    document.getElementById("lbl-town").innerHTML = "";
  }
}

// Validation for region
function validateRegion() {
  var x = document.getElementById("txt-region");
  var regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-region").innerHTML =
      "Please enter valid Region";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-region").innerHTML = "";
    document.getElementById("lbl-region").innerHTML = "";
  }
}

// Validation for zip code
function validateZipCode() {
  var x = document.getElementById("txt-zipcode");
  var regex = /^[0-9]{6}$/;
  if (!x.value.match(regex)) {
    document.getElementById("error-zipcode").innerHTML =
      "Please enter valid zipcode.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-zipcode").innerHTML = "";
    document.getElementById("lbl-zipcode").innerHTML = "";
  }
}

// Validation for country
function validateCountry() {
  var x = document.getElementById("country").selectedIndex;
  if (x === 0) {
    document.getElementById("error-country").innerHTML =
      "Please select country.";
  } else {
    Status = true;
    document.getElementById("error-country").innerHTML = "";
    document.getElementById("lbl-country").innerHTML = "";
  }
}

// Validation for phone number
function validatePhoneNo() {
  var x = document.getElementById("txt-telephone");
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; // Phone number should contain 10 digits
  if (!x.value.match(regex)) {
    x.focus();
    document.getElementById("error-telephoneno").innerHTML =
      "Please enter valid telephone number.";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-telephoneno").innerHTML = "";
    document.getElementById("lbl-telephoneno").innerHTML = "";
  }
}

// Validation for fax
function validateFax() {
  var x = document.getElementById("txt-fax");
  var regex = /^\+?[0-9]{6,}$/; // fax number should contain 6 digits
  if (!x.value.match(regex)) {
    x.focus();
    document.getElementById("error-fax").innerHTML =
      "Please enter valid fax number";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-fax").innerHTML = "";
    document.getElementById("lbl-fax").innerHTML = "";
  }
}

// Validation for email
function validateEmail() {
  var x = document.getElementById("txt-email");
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!x.value.match(regex)) {
    x.focus();
    document.getElementById("error-mail").innerHTML =
      "Please enter valid email address";
    x.value = null;
  } else {
    Status = true;
    document.getElementById("error-mail").innerHTML = "";
    document.getElementById("lbl-mail").innerHTML = "";
  }
}

function cancel() {
  window.escape();
}

// function for button click event on MAKE PAYMENT
function submit() {
  var cardNumber = document.getElementById("txt-cardnumber").value.length;
  var securityCode = document.getElementById("txt-securitycode").value.length;
  var name = document.getElementById("txt-name").value.length;
  var address = document.getElementById("txt-address1").value.length;
  var town = document.getElementById("txt-town").value.length;
  var zipcode = document.getElementById("txt-zipcode").value.length;
  var email = document.getElementById("txt-email").value.length;
  var month = document.getElementById("month").selectedIndex;
  var year = document.getElementById("year").selectedIndex;
  var country = document.getElementById("country").selectedIndex;

  if (cardNumber == 0) {
    document.getElementById("error-cardnumber").innerHTML =
      "Please enter card number";
  }
  if (securityCode == 0) {
    document.getElementById("error-securitycode").innerHTML =
      "Please enter security code";
  }
  if (name == 0) {
    document.getElementById("error-name").innerHTML =
      "Please enter card holder name";
  }
  if (address == 0) {
    document.getElementById("error-address1").innerHTML =
      "Please enter address";
  }
  if (town == 0) {
    document.getElementById("error-town").innerHTML = "Please enter town/city";
  }
  if (zipcode == 0) {
    document.getElementById("error-zipcode").innerHTML =
      "Please enter zip code";
  }
  if (email == 0) {
    document.getElementById("error-mail").innerHTML = "Please enter mail id";
  }
  if (month == 0) {
    document.getElementById("error-expirydate").innerHTML =
      "Please select month";
    Status = false;
  }
  if (year == 0) {
    document.getElementById("error-expirydate").innerHTML =
      "Please select year";
    Status = false;
  }
  if (country == 0) {
    document.getElementById("error-country").innerHTML =
      "Please select country";
    Status = false;
  }
  if (Status) {
    alert("Payment Successfull");
    location.replace("Flower_Shop_Online.html");
  } else {
    alert("Payment Failed");
  }
}
