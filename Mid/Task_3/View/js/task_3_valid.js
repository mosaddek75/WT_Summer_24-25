function handleSubmit() {
var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
var donationType = document.querySelector('input[name="donation"]:checked').value;
var amount = document.getElementById("amount").value;
  
  if (!firstName || !lastName || !email || !phone || !address || !donationType) {
    alert("Please fill in all required fields.");
    return false;
  }
  
}
 