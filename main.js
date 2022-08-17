function companyEmployee(EmployeeID, FullName, Department, Level, ImageURL) {
  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.ImageURL = ImageURL;

  if (this.Level === "Junior") {
    this.Salary = Math.floor(Math.random() * (1000 - 500)) + 500;
  }

  if (this.Level === "Mid-Senior") {
    this.Salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
  }

  if (this.Level === "Senior") {
    this.Salary = this.Salary =
      Math.floor(Math.random() * (2000 - 1500)) + 1500;
  }
}

//------------------------- Another Example using Factory Function

// function companyEmployee2(EmployeeID, FullName, Department, Level) {
// 	let Salary =
// 		Level === 'Mid-Senior'
// 			? Math.floor(Math.random() * (1500 - 1000)) + 1000
// 			: Level === 'Senior'
// 			? Math.floor(Math.random() * (2000 - 1500)) + 1500
// 			: Math.floor(Math.random() * (1000 - 500)) + 500

// 	return {
// 		EmployeeID,
// 		FullName,
// 		Department,
// 		Level,
// 		Salary,
// 	}
// }

// const Employee1 = new companyEmployee(1000 , "Ghazi Samer" , "Administration" , "Senior" )
// const Employee2 = new companyEmployee(1001 , "Lana Ali" , "Finance" , "Senior" )
// const Employee3 = new companyEmployee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" )
// const Employee4 = new companyEmployee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" )
// const Employee5 = new companyEmployee(1004 , "Omar Zaid" , "Development" , "Senior" )
// const Employee6 = new companyEmployee(1005 , "Rana Saleh" , "Development" , "Junior" )
// const Employee7 = new companyEmployee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" )

// let dada = Object.values(Employee1)
// const newArray=Object.keys(Employee1)

// const EmployeesArray= [Employee1 , Employee2 , Employee3 , Employee4 , Employee5 , Employee6 , Employee7]

function CreateTable() {
  const Table1 = document.createElement("table");
  document.querySelector("main").appendChild(Table1);
  let arrayHeading = [
    "EmployeeID",
    "Full Name",
    "Department",
    "Level",
    "Salary",
  ];
  let Thead = Table1.createTHead();
  let headRow = document.createElement("tr");
  Thead.appendChild(headRow);

  for (i = 0; i <= 4; i++) {
    let headCell = document.createElement("th");
    headRow.appendChild(headCell);
    let ThText = document.createTextNode(arrayHeading[i]);
    headCell.appendChild(ThText);
  }

  let tBody = Table1.createTBody();

  function myTable(Employee) {
    let bodyRow = document.createElement("tr");
    tBody.appendChild(bodyRow);

    for (let KEYS in Employee) {
      if (KEYS === "ImageURL") {
        continue;
      }
      let bodyCell = document.createElement("td");
      bodyRow.appendChild(bodyCell);
      let cellContent = document.createTextNode(Employee[KEYS]);
      bodyCell.appendChild(cellContent);
    }
  }
  function fillTable() {
    for (i = 0; i <= EmployeesArray.length; i++) {
      myTable(EmployeesArray[i]);
    }
  }
  fillTable();
}

function render() {
  CreateTable();

  for (i = 0; i <= EmployeesArray.length; i++) {
    console.log(EmployeesArray[i]);
  }

  // console.log(Employee1)
  // console.log("Name :" + Employee1.FullName, "  Salary :"+ Employee1.Salary)

  // console.log(Employee2)
  // console.log("Name :" + Employee2.FullName  ,"  Salary :" + Employee2.Salary)

  // // console.log(Employee3)
  // console.log("Name :" + Employee3.FullName ,"  Salary :" + Employee3.Salary)

  // // console.log(Employee4)
  // console.log("Name :" + Employee4.FullName ,"  Salary :" + Employee4.Salary)

  // // console.log(Employee5)
  // console.log("Name :" + Employee5.FullName ,"  Salary :" + Employee5.Salary)

  // // console.log(Employee6)
  // console.log("Name :" + Employee6.FullName ,"  Salary :" + Employee6.Salary)

  // // console.log(Employee7)
  // console.log("Name :" + Employee7.FullName ,"  Salary :" + Employee7.Salary)
}
// render();

// let formElement = document.getElementById("Form1");

let EmployeesArray = [];

function Createcard(event) {
  event.preventDefault();

  let EmployeeID = document.getElementById("EmployeeID").value;
  let FullName = document.getElementById("fullName").value;
  let Department = document.getElementById("Department").value;
  let Level = document.getElementById("Level").value;
  let ImageURL = document.getElementById("ImageURL").value;

  let employeee = new companyEmployee(
    EmployeeID,
    FullName,
    Department,
    Level,
    ImageURL
  );

  let Card = document.createElement("div");
  document.getElementById("CardsContainer").appendChild(Card);
  let Img = document.createElement("img");
  Img.src = employeee.ImageURL;
  Card.appendChild(Img);

  let EmpID = document.createElement("h4");
  EmpID.textContent = "ID: " + employeee.EmployeeID;
  Card.appendChild(EmpID);

  let cardName = document.createElement("h4");
  cardName.textContent = "Name:" + employeee.FullName;
  Card.appendChild(cardName);
  let Department1 = document.createElement("h5");
  Department1.textContent = "Department :" + employeee.Department;
  Card.appendChild(Department1);

  let Lev = document.createElement("h5");
  Lev.textContent = "Level:" + employeee.Level;
  Card.appendChild(Lev);

  let empSalary = document.createElement("p");
  empSalary.textContent = employeee.Salary;
  Card.appendChild(empSalary);




  EmployeesArray.push(employeee);
  localStorage.setItem("Employees", JSON.stringify(EmployeesArray));

  saveToLocal()




  Card.style.display = "inline-block";
  Card.style.background = "rgb(106, 165, 227)";
  Card.style.color = "white";
  Card.style.borderRadius = "20px";
  Card.style.textAlign = "center";
  empSalary.style.fontSize = "2rem";
  Img.style.borderRadius = "50%";
  Img.style.margin = "1rem";
  Card.style.margin = "1rem";
  Card.style.padding = "1.5rem";
  cardName.style.fontStyle = "italic";
  Card.style.boxShadow = "3px 5px #888888";
  Card.style.opacity = "90%";
  Card.style.transition = "transform .5s ease-in";

  Card.addEventListener("mouseenter", () => {
    Card.style.opacity = "100%";
    Card.style.boxShadow = "4.3px 6px #888888";
    Card.style.transform = "scale3d(1.2, 1.2,1.2)";
    Card.style.zIndex = "3";
  });
  Card.addEventListener("mouseleave", () => {
    Card.style.opacity = "90%";
    Card.style.boxShadow = "3px 5px #888888";
    Card.style.transform = "scale3d(1,1,1)";
  });
}

console.log(EmployeesArray);



function saveToLocal(){
    let strArr = JSON.stringify(EmployeesArray);
    localStorage.setItem('employees', strArr); 
 }
 
 function getFromLocal(){
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    EmployeesArray = arr;
    // arr.forEach((ele)=>{
    //     console.log(ele);
    // })
    // console.log(arr);
 }

 getFromLocal()

 let btn = document.getElementById("submit-btn");
btn.addEventListener("click", Createcard);