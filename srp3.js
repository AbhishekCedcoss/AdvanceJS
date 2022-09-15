class Emp {
  constructor(Id, Name, Sal) {
    this.Id = Id;
    this.Name = Name;
    this.Sal = Sal;
  }
}

function disp() {
  const john = new Emp("1", "John", "8000");
  const obj = JSON.stringify(john);
  var src = obj;

  document.getElementById("resf").innerHTML = src;
}
