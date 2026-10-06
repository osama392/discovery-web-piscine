const title = document.getElementById("title");
const message = document.querySelector(".message");
const box = document.getElementById("box");

title.textContent = "Hello JavaScript!";
message.textContent = "The DOM is working!";

title.style.color = "red";

box.classList.add("active");
