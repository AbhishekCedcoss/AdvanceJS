class Emp {
    constructor(Id, Name, Sal) {
      this.Id = Id;
      this.Name = Name;
      this.Sal = Sal;
    }
  }
  const john =new Emp("1","John","8000")
function disp() {
  var src =
    "<div><table border=1><tr><th id ='tdh'>ID</th><th id ='tdh'>Name</th> <th id ='tdh'>Total Salary </th>";
  document.getElementById("resf").innerHTML = src;
  src +=
    "<tr><td id='tds'>" +
    john.Id +
    "</td id='tds'><td >" +
    john.Name +
    "</td> <td >" +
    john.Sal +
    "</td></tr></table>";
    

  document.getElementById("resf").innerHTML = src;
}
