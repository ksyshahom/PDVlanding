var tzInput=document.querySelector(".contact-us__input--tz"),tzLabel=document.querySelector(".contact-us__label-text--tz"),tzView=document.querySelector(".contact-us__data-value--tz"),picsInput=document.querySelector(".contact-us__input--pics"),picsLabel=document.querySelector(".contact-us__label-text--pics"),picsView=document.querySelector(".contact-us__pic-list"),form=document.querySelector(".contact-us__form"),textarea=document.querySelector(".contact-us__form-textarea"),textareaView=document.querySelector(".contact-us__data-value--textarea"),confirmBtn=document.querySelector(".contact-us__data-confirm"),dataView=document.querySelector(".contact-us__data-view");function createPicView(e){let t=document.createElement("a");t.setAttribute("href","#"),t.setAttribute("target","_blank"),t.setAttribute("download",e.name),t.classList.add("contact-us__data-link"),t.innerHTML=e.name;let n=document.createElement("img");n.setAttribute("alt",e.name),n.classList.add("contact-us__pic-img");let i=document.createElement("div");i.classList.add("contact-us__pic-item"),i.appendChild(n),i.appendChild(t),picsView.appendChild(i);var a,c=new FileReader;c.onload=(a=n,function(e){a.src=e.target.result,t.setAttribute("href",e.target.result)}),c.readAsDataURL(e)}tzInput.addEventListener("change",(function(){if(0===tzInput.files.length)tzLabel.innerHTML="Прикрепите ТЗ",tzView.innerHTML="Файлов нет";else{tzLabel.innerHTML=tzInput.files.item(0).name;let e=document.createElement("a");e.setAttribute("href","#"),e.setAttribute("target","_blank"),e.classList.add("contact-us__data-link"),e.innerHTML=tzInput.files.item(0).name,tzView.innerHTML="",tzView.appendChild(e)}})),picsInput.addEventListener("change",(function(){if(console.log(picsInput.files),0===picsInput.files.length)picsLabel.innerHTML="Добавьте фото товара",picsView.innerHTML="Файлов нет";else{picsView.innerHTML="";let e="";for(let t=0;t<picsInput.files.length;t++)0===t?(e=picsInput.files.item(t).name,createPicView(picsInput.files.item(t))):(e=e+", "+picsInput.files.item(t).name,createPicView(picsInput.files.item(t)));picsLabel.innerHTML=e}})),textarea.addEventListener("change",(function(){textareaView.innerHTML=textarea.value})),form.addEventListener("submit",(function(e){e.preventDefault(),form.checkValidity()&&(window.location.hash="",dataView.classList.add("contact-us__data-view--active"),window.location.hash="data-view")})),confirmBtn.addEventListener("click",(function(){form.checkValidity()&&form.submit()}));