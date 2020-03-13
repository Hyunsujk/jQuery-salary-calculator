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
}

function render() {
  console.log("render");
}
