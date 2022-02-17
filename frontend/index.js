function listUsers() {
  fetch("http://localhost:4000/api/list-new-users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        let temp = "";

        data.forEach((element) => {
          document.getElementById(
            "creatAt"
          ).innerHTML = `<h6>ultima atualização: ${element.creatAt}</h6>`;
          temp += "<tr>";
          temp += "<td>" + element.first_name + "<td>";
          temp += "<td>" + element.last_name + "<td>";
          temp += "<td>" + element.email + "<td>";
          temp += `<i class="bi bi-play-circle-fill"></i>`;
          temp += "</tr>";
        });

        document.getElementById("list").innerHTML = temp;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
listUsers();

function createNewUser() {
  var qtdUsers = document.getElementById("qtdUsers").value;

  if (qtdUsers > 50) {
    alert("só é permitido criar 50 usuarios por vez !");
  } else if (!qtdUsers) {
    alert("Por favor digite a quantidade de usuarios !");
  } else {
    let data = { numberOfUsers: qtdUsers };
    fetch("http://localhost:4000/api/create-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          let temp = "";

          data.forEach((element) => {
            temp += "<tr>";
            temp += "<td>" + element.first_name + "<td>";
            temp += "<td>" + element.last_name + "<td>";
            temp += "<td>" + element.email + "<td>";
            temp += "</tr>";
          });

          document.getElementById("list").innerHTML = temp;

          //document.getElementById("result").innerHTML =
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function registerUser() {
  var link = document.getElementById("link").value;

  let data = { link: link };
  fetch("http://localhost:4000/api/register-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // if (data.length > 0){
      //    let temp= ""

      //    data.forEach((element) => {

      //       temp += "<tr>"
      //       temp += "<td>"+ element.first_name + "<td>"
      //       temp += "<td>"+ element.last_name + "<td>"
      //       temp += "<td>"+ element.email + "<td>"
      //       temp += `<i class="bi bi-play-circle-fill"></i>`
      //       temp += "</tr>"

      //       document.getElementById("creatAt").innerHTML = `<h6>ultima atualização: ${element.creatAt}</h6>`
      //    });

      //  document.getElementById("list").innerHTML = temp

      // }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
