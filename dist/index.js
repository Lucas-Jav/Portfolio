document.querySelector("input[name=checkbox]").addEventListener("change",(function(){const e=document.getElementById("colordays");this.checked?(e.classList.toggle("day"),e.classList.toggle("nigth")):(e.classList.toggle("nigth"),e.classList.toggle("day"))})),document.getElementById("cv").addEventListener("click",(function(){return window.open("../doc/cv.pdf","_blank")}));