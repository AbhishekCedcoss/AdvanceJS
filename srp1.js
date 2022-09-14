var str =
  "<div><table border=1><tr><th id ='tdh'>ID</th><th id ='tdh'>Name</th> <th id ='tdh'>Basic Salary </th><th id ='tdh'>Action</th>";
document.getElementById("res").innerHTML = str;
var arr = [];
function add() {
  var empId = document.getElementById("Id").value;
  var empName = document.getElementById("Name").value;
  var empBasic = document.getElementById("Basic").value;
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
    "</td> <td id='tds'>" +
    "<a  onclick='del(\"" +
    emp.Id +
    "\")' href='#'>Delete</a>" +
    "</td></tr>";

  document.getElementById("res").innerHTML = str;
  console.log(arr);
}
function del(Id) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].Id == Id) {
      arr.splice(index, 1);
    }
  }
  console.log(arr);
  //   delete arr[Id-1]
  //   console.log(Id);
  //   console.log(arr)
}
function disp() {
  var src =
    "<div><table border=1><tr><th id ='tdh'>ID</th><th id ='tdh'>Name</th> <th id ='tdh'>Basic Salary </th>";
  document.getElementById("resf").innerHTML = str;
  for (let index = 0; index < arr.length; index++) {
    src +=
      "<tr><td id='tds'>" +
      arr[index].Id +
      "</td id='tds'><td id='tds'>" +
      arr[index].Name +
      "</td> <td id='tds'>" +
      arr[index].Basic +
      "</td></tr>";
  }
  document.getElementById("resf").innerHTML = src;
}
