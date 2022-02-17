function responseQuestionNewUsers() {
  var link = document.getElementById("link").value;
  console.log(link);

  let data = { link: link };
  fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("results").innerHTML =
        "<h3>Começando a responder, por favor verifique se está tudo certo!</h3>";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function responseQuestion() {
  var linkTwo = document.getElementById("link2").value;
  var email = document.getElementById("email").value;

  if (!linkTwo) {
    alert("Preencha o campo link!");
  } else if (!email) {
    alert("Preencha o campo email!");
  }

  let data = { link: link, email: email };
  fetch("http://localhost:4000/api/response-questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML =
        "<h3>Começando a responder, por favor verifique se está tudo certo!</h3>";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
