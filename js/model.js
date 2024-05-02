export default class Model {
    constructor() {
        this.view = null;
        this.todos = [];
        this.todoIDCounter = 1;
    }
    SetView(view) {
        this.view = view;
    }
    GetTodos() {
        return this.todos;
    }
    AddTodo(task) {
        const todo = {
            id: this.todoIDCounter++,
            task,
            completed: false,
        };
        this.todos.push(todo);
        console.log(this.todos);
        return todo;
    }
    RemoveRow(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log(this.todos);
    }
    FinishedTask(id) {
        this.todos.find(todo => todo.id === id).completed = !this.todos.find(todo => todo.id === id).completed;
    }


}