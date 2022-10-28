var v = document.querySelector(".video__video");
v.innerHTML = "";

var btn = document.createElement("button");
btn.setAttribute("type", "button");
btn.classList.add("video__play-btn");

var btnLabel = document.createElement("span");
btnLabel.classList.add("visually-hidden");
btnLabel.innerHTML = "Воспроизвести видео";

btn.appendChild(btnLabel);
v.appendChild(btn);

btn.addEventListener("click", function(){
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/i5T6Fnbq34c");
  iframe.setAttribute("title", "Видео о нашей работе");
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  iframe.setAttribute("allowfullscreen", "");
  iframe.classList.add("video__iframe");
  v.innerHTML = "";
  v.appendChild(iframe);
});
