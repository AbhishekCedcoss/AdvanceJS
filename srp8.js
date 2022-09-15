var obj = {
  Id: "1",
  Name: "John",
  salary: "",
};

function debug() {
  var sal = document.getElementById("sal").value;
  obj.salary = sal;

  if (obj.salary <= 0) {
    debugger;
    alert("please enter the correct value");
    return
  } else if(obj.salary >= 0) {
    var str =
      "<table ='border:1'><tr><th>ID</th><th>Name</th><th>Salary</th></tr><tr><td>" +
      obj.Id +
      "</td><td>" +
      obj.Name +
      "</td><td>" +
      obj.salary +
      "</td></tr>";
  }
  document.getElementById("print").innerHTML = str;
}
