// selection done
const inputTask = document.querySelector("#input-task");
const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");

// adding function

addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = ` ${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = ` <i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = ` <i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add('checkTask');
    task.appendChild(deleteButton);

    if (inputTask === "") {
        alert('enter some task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click', function () {
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})


