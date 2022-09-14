try {
    function disp() {
        "use strict";
        class employee {
          constructor(id, name, salary) {
            this.id = id;
            this.name = name;
            this.salary = salary;
          }
        }
      
        let data1 = new employee(1, "John", 30000);
        let data2 = new employee(2, "Mark", 30000);
        let data3 = new employee(3, "Yash", 30000);
        
      
        var arr = [];
        arr.push(data1);
        arr.push(data2);
        arr.push(data3);
      
        var js = JSON.stringify(arr);
        var obj = JSON.parse(js);
      
        var table = "<table border ='1'><tr><th>ID</th><th>Name</th><th>Salary</th>";
        obj.forEach((element) => {
          table +=
            "<tr><td>" +
            element.id +
            "</td><td>" +
            element.name +
            "</td><td>" +
            element.salary 
             +
            "</td></tr>";
        });
        table += "</table>";
        document.getElementById("output").innerHTML = table;
      }
  }
  catch(err) {
    document.getElementById("output").innerHTML = err.message;
  }