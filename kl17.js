alert("Pradedame užduotį");
function createSchedule() {
  const schedule = document.createElement("ul");
  schedule.className = "Schedule";
  schedule.style.width = "500px";
  schedule.style.height = "400px";
  schedule.style.backgroundColor = "aqua";
  schedule.style.marginLeft = "100px";
  schedule.style.display = "flex";
  schedule.style.flexDirection = "column";
  schedule.style.justifyContent = "flex-start";
  schedule.style.rowGap = "5px";
  schedule.style.textAlign = "center";
  schedule.textContent = "Dienotvarkė " + Date();
  document.body.append(schedule);
}
document.getElementById("createTask").addEventListener("click", createTasks);
function createTasks(event) {
  event.preventDefault();
  const taskText = document.getElementById("tache").value;
  const task = document.createElement("li");
  let mark = document.createElement("input");
  task.id = "task";
  task.style.width = "500px";
  task.style.height = "30px";
  task.style.listStyle = "none";
  task.style.marginLeft = "-40px";
  task.style.backgroundColor = "rgb(247, 0, 255)";
  task.style.textAlign = "left";
  task.textContent = taskText;
  mark.type = "checkbox";
  task.insertBefore(mark);
  schedule.appendChild(task);

}