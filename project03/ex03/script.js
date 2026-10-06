let count = 0;

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function() {
    count++;
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = "green";
    }
});

decrementButton.addEventListener("click", function() {
    count--;
    countElement.textContent = count;

    if (count < 0) {
        countElement.style.color = "red";
    }
});

resetButton.addEventListener("click", function() {
    count = 0;
    countElement.textContent = count;
    countElement.style.color = "black";
});
