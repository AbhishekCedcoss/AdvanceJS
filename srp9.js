var str =
  "<div><table border=1><tr><th id ='tdh'>ID</th><th id ='tdh'>Name</th> <th id ='tdh'>Basic Salary </th>";
document.getElementById("res").innerHTML = str;
var arr = [];
function add() {
  var empId = document.getElementById("Id").value;
  var empName = document.getElementById("Name").value;
  var empBasic = document.getElementById("Basic").value;
  try {
    if (isNaN(empId)) {
      alert("wrong");
      return
    }
    else if(!isNaN(empName)){
        alert("wrong")
        return

    }
    else if(isNaN(empBasic)){
        alert("wrong")
        return

    }
  } catch (error) {
    return
  }

  var emp = {
    Id: empId,
    Name: empName,
    Basic: empBasic,
  };

  arr.push(emp);
  str +=
    "<tr><td id='tds'>" +
    emp.Id +
    "</td id='tds'><td id='tds'>" +
    emp.Name +
    "</td> <td id='tds'>" +
    emp.Basic +
    "</td> "  +
    "</td></tr>";

  document.getElementById("res").innerHTML = str;
  console.log(arr);
}
