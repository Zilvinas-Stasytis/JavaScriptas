
function createSchedule() {
  let schedule = document.createElement("ul");
  schedule.id = "schedule";
  schedule.style.width = "500px";
  schedule.style.height = "400px";
  schedule.style.backgroundColor = "aqua";
  schedule.style.marginLeft = "100px";
  schedule.style.display = "flex";
  schedule.style.flexDirection = "column";
  schedule.style.justifyContent = "space-arround";
  schedule.style.rowGap = "5px";
  schedule.style.marginTop.firstChild = "30px";
  document.body.append(schedule);
}
document.addEventListener("click", createTasks);
function createTasks(event) {
  event.preventDefault();
  let task = document.createElement("li");
  task.id = "task";
  task.style.listStyle = "none";
  task.style.marginLeft = "-40px";
  task.style.backgroundColor = "rgb(247, 0, 255)";
  task.style.textAlign = "left";
  task.style.width = "500px";
  task.style.height = "30px";
  task.textContent = form.input.text;
  schedule.appendChild(task);
}