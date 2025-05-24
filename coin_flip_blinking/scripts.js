let balance = 100;
let selected = null;

const balanceEl = document.getElementById("balance");
const betInput = document.getElementById("betAmount");
const resultMessage = document.getElementById("resultMessage");
const coinImage = document.getElementById("coinImage");

document.querySelectorAll(".choice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selected = btn.dataset.choice;
    document.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.getElementById("flipButton").addEventListener("click", () => {
  const bet = Number(betInput.value);
  if (!selected) return resultMessage.textContent = "Select Heads or Tails!";
  if (bet > balance || bet < 1 || isNaN(bet)) return resultMessage.textContent = "Invalid bet.";

  resultMessage.textContent = "Flipping...";
  coinImage.classList.add("blinking");

  setTimeout(() => {
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    coinImage.src = outcome === "Heads" ? "heads.png" : "tails.png";
    coinImage.classList.remove("blinking");

    if (outcome === selected) {
      balance += bet;
      resultMessage.textContent = `You won! It was ${outcome}.`;
    } else {
      balance -= bet;
      resultMessage.textContent = `You lost! It was ${outcome}.`;
    }

    balanceEl.textContent = balance;
  }, 1500); // simulate flipping time
});
