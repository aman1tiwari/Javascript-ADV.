//import { id, name, salary } from "./details";

var cart = [];

      function add() {
       
        var ID = document.getElementById("id").value;
       
        var Name = document.getElementById("name").value;
        var Salary = document.getElementById("salary").value;
        // "use strict";
        // Emp_Salary = 30000;
       
        if (ID == "" || Name == "" || Salary == "") {
          document.getElementById("error").innerHTML =
            "All fields must be filled.";
        }

        var Details = {
          Empid: `${ID}`,
          Empname: `${Name}`,
          Empsalary: `${Salary}`,
        };
        cart.push(Details);
        // JSON.stringify(cart)
        // console.log(myJSON)
       
        Display();
      }

      function Display() {
        html_header = `<table><tr><th>ID</th><th>Name</th><th>Basic Salary</th><th>Updated Salary</th></tr>`;
        html_footer = `<tr><th></th><th></th><th></th><tr></table>`;
        var row = "";
        row += `<tr><td>${id}</td><td>${name}</td><td>${salary}</td><td></td></tr>`;

        try {
          cart.forEach((element) => {
            

            if (element.Empsalary > 0) {
              var updatedSal = element.Empsalary * 1.1;
              
              html_header += `<tr>
        <td>${element.Empid}</td>
        <td>${element.Empname}</td>
        <td>${element.Empsalary}</td>
        <td>${updatedSal}</td>
        </tr>`;
            } else {
              alert("Your salary is less than or equal to zero");
            }
          });
          document.getElementById("table1").innerHTML = html_header + html_footer;
        } catch (Catcherror) {
          // alert("There is some error");
        }
      }

      class Cart {
        function() {
          var ID = document.getElementById("id").value;
          var Name = document.getElementById("name").value;
          var Salary = document.getElementById("salary").value;
          // "use strict";
          // Emp_Salary = 30000;
          var Details = {
            Empid: `${ID}`,
            Empname: `${Name}`,
            Empsalary: `${Salary}`,
          };        
         
        }
      }
    