document
  .querySelector("#submit-btn")
  .addEventListener("click", function (event) {
    // Get the value of the input field
    const username = document.querySelector("input[name=username]").value;
    const password = document.querySelector("input[name=password]").value;

    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
