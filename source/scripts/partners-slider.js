var inputs = document.querySelectorAll(".partners__pagination input");
var groups = document.querySelectorAll(".partners__group");

function toggleGroup() {
  if (inputs[0].checked) {
    groups[0].classList.add("partners__group--active");
    groups[1].classList.remove("partners__group--active");
  }
  else {
    groups[1].classList.add("partners__group--active");
    groups[0].classList.remove("partners__group--active");
  }
}

inputs[0].addEventListener("change", function (){
  toggleGroup();
});

inputs[1].addEventListener("change", function (){
  toggleGroup();
});
