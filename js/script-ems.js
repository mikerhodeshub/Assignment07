// CREATE AN ARRAY OF EMPLOYEES
let employees = [];
let emp1 = [12345678, 'Mike',1234, 'mike@mike.com' , 'Software'];
let emp2 = [38476393, 'Amy',1456, 'amy@amy.com' , 'Admin'];
let emp3 = [53273463, 'Brian',9876, 'brian@brian.com' , 'IT'];
let emp4 = [23572433, 'Linda',3123, 'linda@linda.com' , 'Data Analysis'];
let emp5 = [64328765, 'Kurt',7310,'kurt@kurt.com' , 'Design'];
employees.push(emp1, emp2, emp3, emp4, emp5);


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if(localStorage.getItem('employees') !== null){
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
employees = JSON.parse(localStorage.employees);
}
// GET DOM ELEMENTS
let tablebody = document.querySelector('#empTable tbody');
let empstring = "", tablerow, empcount = employees.length;
let idcount = 0;
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
//IIFE
(function(){
    buildGrid();
})();

// ADD EMPLOYEE
document.querySelector('form').addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let newEmp = [];
    let empId = document.getElementById('id').value;
    let empName = document.getElementById('name').value;
    let empExtension = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    newEmp.push(empId, empName, empExtension, empEmail, empDept);
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)
    // BUILD THE GRID
    buildGrid();
    //tablebody.innerHTML += `<tr id="${employees.length - 1}"><td>${newEmp[0]}</td><td>${newEmp[1]}</td><td>${newEmp[2]}</td><td>${newEmp[3]}</td><td>${newEmp[4]}</td><td><button class="btn btn-danger btn-sm">Remove</button></td>`;
    // RESET THE FORM
    document.querySelector('form').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    let delconfirm = confirm('Are you sure you want to delete this employee?');
    if(delconfirm !== false){
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let selEmp = e.target.parentNode.parentNode.id
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(selEmp, 1);
        // BUILD THE GRID
        buildGrid();
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tablebody.innerHTML = "";
    // REBUILD THE TBODY FROM SCRATCH
    idcount = 0;
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for(let i of employees){
       // REBUILDING THE ROW STRUCTURE
        empstring += `<tr id="${idcount}"><td>${i[0]}<td>${i[1]}<td>${i[2]}<td>${i[3]}<td>${i[4]}<td><button class="btn btn-danger btn-sm">Remove</button></td>`;
       // BIND THE TBODY TO THE EMPLOYEE TABLE
        tablebody.innerHTML = empstring;
        idcount++;
    }
    empstring = "";
    idcount = 0;
    // UPDATE EMPLOYEE COUNT
    empcount = employees.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.employees = JSON.stringify(employees);
};