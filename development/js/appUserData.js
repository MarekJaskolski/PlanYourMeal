var userInput = document.getElementById("userApp");
var addNameBtn = document.getElementById("confirmBtn");
var userNameField = document.getElementById("userName");
var nameBox = document.getElementById("nameBox");

//set name
addNameBtn.addEventListener("click", function (e) {
  userNameField.innerText = userInput.value;
  localStorage.setItem("user", userInput.value);
  if (userNameField.innerText !== "Imię") {
    nameBox.parentElement.removeChild(nameBox);
  }
});
userNameField.innerText = localStorage.getItem("user");

//name validation
if (userNameField.innerText === "") {
  userNameField.innerText = "Imię";
} else if (userNameField.innerText != "Imię") {
  userNameField.innerText = localStorage.getItem("user");
}
if (userNameField.innerText !== "Imię") {
  nameBox.parentElement.removeChild(nameBox);
}
//new section
