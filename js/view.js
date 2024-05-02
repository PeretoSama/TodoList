import AddTodo from "./components/add-todo.js";

export default class View {

    constructor() {
        this.model = null;
        this.table = document.getElementById("table");
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick(this.AddTodo.bind(this));
    }

    SetModel(model) {
        this.model = model;
    }
    AddTodo(task) {
        const todo = this.model.AddTodo(task);
        this.CreateRow(todo)

    }
    CreateRow(todo) {
        const row = table.insertRow();
        row.setAttribute("id", todo.id);
        const progres = todo.completed ? "Completed" : "In progress"
        row.innerHTML = `
        <td>${todo.id}</>
        <td>${todo.task}</td>
        <td>${todo.completed ? "Completed" : "In progress"}</td>
        <td class="d-flex">
        </td>
        `;
        const finishedButton = document.createElement("button");
        finishedButton.innerHTML = 'Finished';
        finishedButton.classList.add("btn", "btn-primary");
        row.children[3].appendChild(finishedButton);
        finishedButton.onclick = () => {
            this.FinishedTask(todo.id);
        }

        const removeButton = document.createElement("button");
        removeButton.innerHTML = 'Remove';
        removeButton.classList.add("btn", "btn-danger", "ml-1");
        row.children[3].appendChild(removeButton);
        removeButton.onclick = () => {
            this.RemoveRow(todo.id);
        }

    }
    FinishedTask(id) {
        this.model.FinishedTask(id);
        if(this.model.todos.find(todo=>todo.id===id).completed==true){
            document.getElementById(id).children[2].innerHTML = `Completed`;
            document.getElementById(id).children[3].children[0].classList.remove("btn-primary");
            document.getElementById(id).children[3].children[0].classList.add("btn-success");
        }else{
            document.getElementById(id).children[2].innerHTML = `In progress`;
            document.getElementById(id).children[3].children[0].classList.add("btn-primary");
            document.getElementById(id).children[3].children[0].classList.remove("btn-success");
        }
        

    }
    RemoveRow(id) {

        this.model.RemoveRow(id);
        document.getElementById(id).remove();
    }



}