console.log("calculator");
$(document).ready(init);

function init() {
  console.log("init");
  $(".js-add-employees").on("submit", submitEmployeeInfo);
}

function submitEmployeeInfo(event) {
  event.preventDefault();
  console.log("submit");
}
