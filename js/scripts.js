const input = document.getElementById("todoList");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");
const list = document.getElementById("randoms");




function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}



function clicked(){
    const task = input.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  let li = document.createElement("li");
  li.className = "listBox fade-in";
  li.innerHTML = input.value +` <div class="icons"> <button class="deleteIcon"><svg xmlns="http://www.w3.org/2000/svg" fill="#5dade2"  viewBox="0 0 640 640"><!--!Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg></button> <button class="doneIcon"><svg xmlns="http://www.w3.org/2000/svg" fill="#5dade2" viewBox="0 0 640 640"><!--!Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/></svg></button></div>`
  list.appendChild(li);

  input.value = "";

  const deleteBtn = li.querySelector(".deleteIcon");
  const doneBtn = li.querySelector(".doneIcon");

   deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounters();
  });

 
  doneBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCounters();
  });


  input.value = "";

  updateCounters();

}








//event delegation
//parentelemnt.remove
// parent lw list add class linethrough


