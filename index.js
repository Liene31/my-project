const wisdomArray = [
  "Code is like humor. When you have to explain it, it's bad.",
  "Simplicity is the soul of good software.",
  "Don't optimize prematurely; clarity comes first.",
  "First, solve the problem. Then, write the code.",
  "Coding like poetry should be short and concise.",
  "Code is a spell; clarity is its true component.",
  "Patience is mana; spend it wisely.",
];
const wisdomBtn = document.getElementById("wisdom-btn");
const wisdomQuotation = document.getElementById("wisdom-quotation");

function randomNumber() {
  return Math.floor(Math.random() * 7);
}

wisdomBtn.addEventListener("click", function () {
  wisdomQuotation.innerHTML = wisdomArray[randomNumber()];
});
