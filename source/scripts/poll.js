var pollOptions = document.querySelectorAll(".poll__option");
var pollOptionsInputs = document.querySelectorAll(".poll__label input");

//
var isStorageSupport = true;
var storageOption;

try {
  storageOption = localStorage.getItem("polloption");
  if (storageOption){
    pollOptionsInputs[storageOption].checked = true;
    pollOptions[storageOption].classList.add("poll__option--active");
  }
} catch (err) {
  isStorageSupport = false;
}

function ChangeActiveOption(){
  if(pollOptionsInputs[0].checked) {
    pollOptions[0].classList.add("poll__option--active");
    pollOptions[1].classList.remove("poll__option--active");
    pollOptions[2].classList.remove("poll__option--active");
    if (isStorageSupport){
      localStorage.setItem("polloption", 0);
    }
  }
  else {
    if(pollOptionsInputs[1].checked) {
      pollOptions[1].classList.add("poll__option--active");
      pollOptions[0].classList.remove("poll__option--active");
      pollOptions[2].classList.remove("poll__option--active");
      if (isStorageSupport){
        localStorage.setItem("polloption", 1);
      }
    }
    else {
      pollOptions[2].classList.add("poll__option--active");
      pollOptions[0].classList.remove("poll__option--active");
      pollOptions[1].classList.remove("poll__option--active");
      if (isStorageSupport){
        localStorage.setItem("polloption", 2);
      }
    }
  }
}

pollOptionsInputs[0].addEventListener("change", function(){
  ChangeActiveOption();
});

pollOptionsInputs[1].addEventListener("change", function(){
  ChangeActiveOption();
});

pollOptionsInputs[2].addEventListener("change", function(){
  ChangeActiveOption();
});
