console.log("calculator");

const employees = [];

$(document).ready(init);

function init() {
  console.log("init");
  $(".js-add-employees").on("submit", submitEmployeeInfo);
}

function submitEmployeeInfo(event) {
  event.preventDefault();
  console.log("submit");

  const employee = {
    firstName: $(".js-input-firstName").val(),
    lastName: $(".js-input-lastName").val(),
    id: $(".js-input-id").val(),
    title: $(".js-input-title").val(),
    annualSalary: $(".js-input-annualSalary").val()
  };

  employees.push(employee);
  console.log(employees);
  render();

  $(".js-input-firstName").val("");
  $(".js-input-lastName").val("");
  $(".js-input-id").val("");
  $(".js-input-title").val("");
  $(".js-input-annualSalary").val("");
}

function render() {
  console.log("render");
  $(".js-table-body").empty();
  let totalMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    const individual = employees[i];
    totalMonthly += parseFloat(individual.annualSalary);
    console.log(("individual:", individual));
    $(".js-table-body").append(`<tr>
    <td>${individual.firstName}</td>
    <td>${individual.lastName}</td>
    <td>${individual.id}</td>
    <td>${individual.title}</td>
    <td>$${individual.annualSalary}</td>
    <td><button>Delete</button></td>
    </tr>`);
  }
  $(".js-total-monthly").text(totalMonthly);
}
