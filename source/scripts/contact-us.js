var tzInput = document.querySelector(".contact-us__input--tz");
var tzLabel = document.querySelector(".contact-us__label-text--tz");
var tzView = document.querySelector(".contact-us__data-value--tz");

var picsInput = document.querySelector(".contact-us__input--pics");
var picsLabel = document.querySelector(".contact-us__label-text--pics");
var picsView = document.querySelector(".contact-us__pic-list");

var form = document.querySelector(".contact-us__form");
var textarea = document.querySelector(".contact-us__form-textarea");
var textareaView = document.querySelector(".contact-us__data-value--textarea");
var confirmBtn = document.querySelector(".contact-us__data-confirm");
var dataView = document.querySelector(".contact-us__data-view");

tzInput.addEventListener("change", function (){
  if (tzInput.files.length === 0 ) {
    tzLabel.innerHTML = "Прикрепите ТЗ";
    tzView.innerHTML = "Файлов нет";
  }
  else {
    tzLabel.innerHTML = tzInput.files.item(0).name;
    let tzlink = document.createElement("a");
    tzlink.setAttribute("href", "#");
    tzlink.setAttribute("target", "_blank");
    tzlink.classList.add("contact-us__data-link");
    tzlink.innerHTML = tzInput.files.item(0).name;
    tzView.innerHTML = "";
    tzView.appendChild(tzlink);
  }
})

function createPicView(file) {
  let piclink = document.createElement("a");
  piclink.setAttribute("href", "#");
  piclink.setAttribute("target", "_blank");
  piclink.setAttribute("download", file.name);
  piclink.classList.add("contact-us__data-link");
  piclink.innerHTML = file.name;
  let picimg = document.createElement("img");
  picimg.setAttribute("alt", file.name);
  picimg.classList.add("contact-us__pic-img");
  let pic = document.createElement("div");
  pic.classList.add("contact-us__pic-item");
  pic.appendChild(picimg);
  pic.appendChild(piclink);
  picsView.appendChild(pic);

  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) {
    aImg.src = e.target.result;
    piclink.setAttribute("href", e.target.result);
  }; })(picimg);
  reader.readAsDataURL(file);
}

picsInput.addEventListener("change", function (){
  console.log(picsInput.files);
  if (picsInput.files.length === 0) {
    picsLabel.innerHTML = "Добавьте фото товара";
    picsView.innerHTML = "Файлов нет";
  }
  else {
    picsView.innerHTML = "";
    let fileNames = "";
    for (let i = 0; i < picsInput.files.length; i++){
      if (i === 0) {
        fileNames = picsInput.files.item(i).name;
        createPicView(picsInput.files.item(i));
      }
      else {
        fileNames = fileNames + ", " + picsInput.files.item(i).name;
        createPicView(picsInput.files.item(i));
      }
    }
    picsLabel.innerHTML = fileNames;
  }
});

textarea.addEventListener("change", function (){
  textareaView.innerHTML = textarea.value;
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (form.checkValidity()) {
    window.location.hash = "";
    dataView.classList.add("contact-us__data-view--active");
    window.location.hash = "data-view";
  }
});

confirmBtn.addEventListener("click", function (){
  if (form.checkValidity()) {
    form.submit();
  }
});
