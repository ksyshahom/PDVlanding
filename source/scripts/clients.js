var toggle = document.querySelector(".clients__toggle");
var toggleBtn = toggle.querySelector(".clients__toggle-btn");
var clientSelections = toggle.querySelectorAll(".clients__number");
var clients = document.querySelectorAll(".clients__item");

toggleBtn.addEventListener("click", function (){
  toggle.classList.toggle("clients__toggle--opened");
});

clientSelections[0].addEventListener("click", function (){
  if(toggle.classList.contains("clients__toggle--opened")) {
    clients[0].classList.add("clients__item--active");
    clients[1].classList.remove("clients__item--active");
    clients[2].classList.remove("clients__item--active");
    clientSelections[0].classList.add("clients__number--active");
    clientSelections[1].classList.remove("clients__number--active");
    clientSelections[2].classList.remove("clients__number--active");
    toggle.classList.remove("clients__toggle--opened");
  }
  else {toggle.classList.add("clients__toggle--opened");}
  clientSelections[0].blur();
});

clientSelections[1].addEventListener("click", function (){
  if(toggle.classList.contains("clients__toggle--opened")) {
    clients[1].classList.add("clients__item--active");
    clients[0].classList.remove("clients__item--active");
    clients[2].classList.remove("clients__item--active");
    clientSelections[1].classList.add("clients__number--active");
    clientSelections[0].classList.remove("clients__number--active");
    clientSelections[2].classList.remove("clients__number--active");
    toggle.classList.remove("clients__toggle--opened");
  }
  else {toggle.classList.add("clients__toggle--opened");}
  clientSelections[1].blur();
});

clientSelections[2].addEventListener("click", function (){
  if(toggle.classList.contains("clients__toggle--opened")) {
    clients[2].classList.add("clients__item--active");
    clients[0].classList.remove("clients__item--active");
    clients[1].classList.remove("clients__item--active");
    clientSelections[2].classList.add("clients__number--active");
    clientSelections[0].classList.remove("clients__number--active");
    clientSelections[1].classList.remove("clients__number--active");
    toggle.classList.remove("clients__toggle--opened");
  }
  else {toggle.classList.add("clients__toggle--opened");}
  clientSelections[2].blur();
});
