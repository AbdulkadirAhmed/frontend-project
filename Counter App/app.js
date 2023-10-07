const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const resetSound = document.getElementById("reset-sound");
let count = 0;

function updateCount(value) {
  count += value;
  countDisplay.innerText = count;
}

function resetCount() {
  resetSound.play();
  count = 0;
  countDisplay.innerText = count;
}

incrementBtn.addEventListener("click", function() {
  updateCount(1);
});

decrementBtn.addEventListener("click", function() {
  updateCount(-1);
});

resetBtn.addEventListener("click", function() {
  resetCount();
});