import CustomAlert from "./show-alert";
export default class AddTodo {
    constructor() {
        this.saveButton = document.getElementById("save");
        const task = document.getElementById("task");
        this.alert= new CustomAlert();

    }

    onClick(callback) {
        this.saveButton.onclick = () =>{
            if (task.value == "") {
                this.alert.ShowAlert();
            } else {
                this.alert.CloseAlert();
                callback(task.value);
            }
        }
    }



}