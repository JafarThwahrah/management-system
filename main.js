function companyEmployee(EmployeeID , FullName , Department , Level , ImageURL){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary =()=>{
    if (this.Level ==="Junior"){
        return(  Math.floor(Math.random() * (1000 - 500) ) + 500
     )
    };

    if (this.Level ==="Mid-Senior"){
        return(  Math.floor(Math.random() * (1500 - 1000) ) + 1000
        )
       }


    


    if (this.Level ==="Senior"){
        return(  Math.floor(Math.random() * (2000 - 1500) ) + 1500
        )
       };

    };
}


const Employee1 = new companyEmployee(1000 , "Ghazi Samer" , "Administration" , "Senior" )
const Employee2 = new companyEmployee(1001 , "Lana Ali" , "Finance" , "Senior" )
const Employee3 = new companyEmployee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" )
const Employee4 = new companyEmployee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" )
const Employee5 = new companyEmployee(1004 , "Omar Zaid" , "Development" , "Senior" )
const Employee6 = new companyEmployee(1005 , "Rana Saleh" , "Development" , "Junior" )
const Employee7 = new companyEmployee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" )

console.log(Employee1)
console.log("Name :" + Employee1.FullName, "  Salary :"+ Employee1.Salary())



console.log(Employee2)
console.log("Name :" + Employee2.FullName  ,"  Salary :" + Employee2.Salary())




console.log(Employee3)
console.log("Name :" + Employee3.FullName ,"  Salary :" + Employee3.Salary())




console.log(Employee4)
console.log("Name :" + Employee4.FullName ,"  Salary :" + Employee4.Salary())




console.log(Employee5)
console.log("Name :" + Employee5.FullName ,"  Salary :" + Employee5.Salary())




console.log(Employee6)
console.log("Name :" + Employee6.FullName ,"  Salary :" + Employee6.Salary())




console.log(Employee7)
console.log("Name :" + Employee7.FullName ,"  Salary :" + Employee7.Salary())

