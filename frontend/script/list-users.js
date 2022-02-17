
         function listUsers(){
              fetch("http://localhost:4000/api/list", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              }
              })
              .then((response) => response.json())
              .then((data) => {
                  console.log(data)
                if (data.length > 0){
                   let temp= ""
    
                   data.forEach((element) => {

                      temp += "<tr>" 
                      temp += "<td>"+ element.first_name + "<td>"
                      temp += "<td>"+ element.last_name + "<td>"
                      temp += "<td>"+ element.email + "<td>"
                      temp += "</tr>" 
                   });
    
                   document.getElementById("list").innerHTML = temp
                   document.getElementById("qtdUsers").innerHTML = data.length
                }
    
              })
              .catch((error) => {
                  console.error("Error:", error);
              });            
          }
          listUsers()