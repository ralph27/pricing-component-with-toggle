let toggleBtn = document.querySelector(".slider");
let annually = document.querySelector("#annually");
let monthly = document.querySelector("#monthly");

function toggle() {
 annually.classList.toggle("display");
 monthly.classList.toggle("display");
}

toggleBtn.addEventListener("click", toggle);
