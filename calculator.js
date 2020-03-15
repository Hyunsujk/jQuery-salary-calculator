// console.log("calculator");
// create an empty array named employees to store added employees
const employees = [];
// set total monthly cost to 0
let totalMonthly = 0;
// once the document is ready, function init will execute
$(document).ready(init);

// init function will add functionality to submit button and delete button
function init() {
  console.log("init");
  $(".js-add-employees").on("submit", submitEmployeeInfo);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}

function deleteEmployee(event) {
  //   console.log("event:", event);
  //   console.log("this:", this);
  // store the index of deleted item
  const deleteThis = $(this).data("index");
  // console.log("deleteThis:", deleteThis);
  // console.log(employees[deleteThis]);
  // const amtDeducted = employees[deleteThis].annualSalary;
  // console.log("amtDeducted", amtDeducted);
  // removed the item with the index from the array
  employees.splice(deleteThis, 1);
  // console.log(employees);
  // update the DOM with updated array
  render();
}

function submitEmployeeInfo(event) {
  // prevent the submit event to refresh the page
  event.preventDefault();
  //   console.log("submit");

  // store the employee's information from the input field to a variable called 'employee'
  const employee = {
    firstName: $(".js-input-firstName").val(),
    lastName: $(".js-input-lastName").val(),
    id: $(".js-input-id").val(),
    title: $(".js-input-title").val(),
    annualSalary: $(".js-input-annualSalary").val()
  };
  // add the employee to employees array
  employees.push(employee);
  //   console.log('employees:',employees);
  // update the DOM with updated array
  render();
  // empty the input field
  $(".js-input-firstName").val("");
  $(".js-input-lastName").val("");
  $(".js-input-id").val("");
  $(".js-input-title").val("");
  $(".js-input-annualSalary").val("");
}

function render() {
  //   console.log("render");
  // empty the table to start from scratch
  $(".js-table-body").empty();
  // empty the total monthly to start from scratch
  $(".js-total-monthly").empty();
  // start the total monthly at 0
  let totalMonthly = 0;
  // start the employee monthly at 0
  let employeeMonthly = 0;
  /* loop through the employees array. 
  For every single index, divide annual salary by 12 and store it to employee monthly.
  add employee monthly to total monthly for the updated amount
  */
  for (let i = 0; i < employees.length; i++) {
    const individual = employees[i];
    employeeMonthly = parseFloat(individual.annualSalary / 12);
    // console.log(employeeMonthly);
    totalMonthly += employeeMonthly;
    // console.log(("individual:", individual));
    // append the employee's information to the table with delete button
    $(".js-table-body").append(`<tr>
    <td>${individual.firstName}</td>
    <td>${individual.lastName}</td>
    <td>${individual.id}</td>
    <td>${individual.title}</td>
    <td class="alnRight">$${employeeMonthly}</td>
    <td><button class="alnCenter btn js-btn-delete" data-index="${i}">Delete</button></td>
    </tr>`);
  }
  // update total monthly cost
  $(".js-total-monthly").text(totalMonthly);
  /* if total monthly is bigger than $20,000, background color will change to red
    if not, it will be white.
  */
  if (totalMonthly > 20000) {
    $(".final").css("background-color", "red");
  } else {
    $(".final").css("background-color", "white");
  }
}
