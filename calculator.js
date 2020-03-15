console.log("calculator");

const employees = [];
let totalMonthly = 0;

$(document).ready(init);

function init() {
  console.log("init");
  $(".js-add-employees").on("submit", submitEmployeeInfo);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}

function deleteEmployee(event) {
  //   console.log("event:", event);
  //   console.log("this:", this);
  const deleteThis = $(this).data("index");
  // console.log("deleteThis:", deleteThis);
  // console.log(employees[deleteThis]);
  // const amtDeducted = employees[deleteThis].annualSalary;
  // console.log("amtDeducted", amtDeducted);
  employees.splice(deleteThis, 1);
  // console.log(employees);
  render();
}

function submitEmployeeInfo(event) {
  event.preventDefault();
  //   console.log("submit");

  const employee = {
    firstName: $(".js-input-firstName").val(),
    lastName: $(".js-input-lastName").val(),
    id: $(".js-input-id").val(),
    title: $(".js-input-title").val(),
    annualSalary: $(".js-input-annualSalary").val()
  };

  employees.push(employee);
  //   console.log('employees:',employees);
  render();

  $(".js-input-firstName").val("");
  $(".js-input-lastName").val("");
  $(".js-input-id").val("");
  $(".js-input-title").val("");
  $(".js-input-annualSalary").val("");
}

function render() {
  //   console.log("render");
  $(".js-table-body").empty();
  $(".js-total-monthly").empty();
  let totalMonthly = 0;
  let employeeMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    const individual = employees[i];
    employeeMonthly = parseFloat(individual.annualSalary / 12);
    // console.log(employeeMonthly);
    totalMonthly += employeeMonthly;
    // console.log(("individual:", individual));
    $(".js-table-body").append(`<tr>
    <td>${individual.firstName}</td>
    <td>${individual.lastName}</td>
    <td>${individual.id}</td>
    <td>${individual.title}</td>
    <td class="alnRight">$${employeeMonthly}</td>
    <td><button class="alnCenter btn js-btn-delete" data-index="${i}">Delete</button></td>
    </tr>`);
  }
  $(".js-total-monthly").text(totalMonthly);

  if (totalMonthly > 20000) {
    $(".final").css("background-color", "red");
  } else {
    $(".final").css("background-color", "white");
  }
}
