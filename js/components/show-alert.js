export default class CustomAlert{

    constructor(){
        this.alert= document.getElementById("alert");
    }
    ShowAlert(){
        this.alert.classList.remove("d-none");
    }
    CloseAlert(){
        this.alert.classList.add("d-none");

    }
}