document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();


    let userEmail = document.getElementById("useremail").value;
    let userPassword = document.getElementById("userPassword").value;

    if (userEmail && userPassword) {
      alert("Login successful!");

      window.location.href = "../index.html";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.id = "message"; 
      errorMessage.style.color = "red";
      errorMessage.textContent = "Error: Invalid email or password. Please try again!";
      document.getElementById("signInForm").appendChild(errorMessage);
    }
  });



