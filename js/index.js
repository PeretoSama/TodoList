import  Model  from "./model.js"
import  View  from "./view.js"

document.addEventListener("DOMContentLoaded", function () {
  const model= new Model();
  const view = new View();
  model.SetView(view);
  view.SetModel(model);

})