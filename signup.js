document
  .getElementById("signupForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    console.log("Email:", userEmail);
    console.log("Password:", userPassword);

    try {
      let API = "https://fakestoreapi.com/users";
      let getApi = await fetch(API);
      let apiJson = await getApi.json();

      let users = [
        { email: "user1@example.com", password: "password1" },
        { email: "user2@example.com", password: "password2" },
        { email: "user3@example.com", password: "password3" },
      ];
      let ApiSet = apiJson.find(
        (user) => user.email === userEmail && user.password === userPassword
      );

      let isUserValid = users.some(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (ApiSet || isUserValid) {
        window.location.href = "../pages/sign-in.html";
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

// //   "kev02937@"
// // "kevin@gmail.com"




