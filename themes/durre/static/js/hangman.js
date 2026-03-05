const WORDS = [
  // tech
  "ALGORITHM", "BANDWIDTH", "COMPILER", "DEBUGGER", "ENCRYPTION",
  "FIREWALL", "GATEWAY", "HYPERLINK", "INTERFACE", "KERNEL",
  "LATENCY", "MIDDLEWARE", "NETWORK", "OVERFLOW", "PROTOCOL",
  "RECURSION", "STYLESHEET", "TERMINAL", "VARIABLE", "WEBHOOK",
  // movies
  "INCEPTION", "INTERSTELLAR", "PARASITE", "HEREDITARY", "DUNE",
  "ARRIVAL", "ANNIHILATION", "AKIRA", "METROPOLIS", "GHOSTBUSTERS",
  // tv
  "SUCCESSION", "SEVERANCE", "EUPHORIA", "DEADWOOD", "FARGO",
  "WESTWORLD", "HANNIBAL", "MINISERIES", "ANTHOLOGY", "CLIFFHANGER",
];

const STAGES = [
`  +---+
  |   |
      |
      |
      |
      |
=========`,
`  +---+
  |   |
  O   |
      |
      |
      |
=========`,
`  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
`  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
`  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
`  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
`  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

let word, guessed, wrong;

function newGame() {
  word = WORDS[Math.floor(Math.random() * WORDS.length)];
  guessed = new Set();
  wrong = 0;
  render();
}

function guess(letter) {
  if (guessed.has(letter)) return;
  const status = getStatus();
  if (status !== "playing") return;

  guessed.add(letter);
  if (!word.includes(letter)) wrong++;
  render();
}

function getStatus() {
  if (wrong >= 6) return "lose";
  if ([...word].every(l => guessed.has(l))) return "win";
  return "playing";
}

function render() {
  const status = getStatus();

  document.getElementById("hm-scaffold").textContent = STAGES[wrong];

  const wordDisplay = [...word].map(l => guessed.has(l) ? l : "_").join(" ");
  document.getElementById("hm-word").textContent = wordDisplay;

  const wrongLetters = [...guessed].filter(l => !word.includes(l));
  document.getElementById("hm-wrong").textContent =
    wrongLetters.length ? "wrong: " + wrongLetters.join(" ") : "\u00a0";

  const msg = document.getElementById("hm-msg");
  if (status === "win")       msg.textContent = "// you win";
  else if (status === "lose") msg.textContent = "// game over — word was: " + word;
  else                        msg.textContent = "\u00a0";

  document.querySelectorAll(".hm-key").forEach(btn => {
    const l = btn.dataset.letter;
    btn.disabled = guessed.has(l) || status !== "playing";
    btn.classList.toggle("hm-key--used", guessed.has(l));
    btn.classList.toggle("hm-key--wrong", guessed.has(l) && !word.includes(l));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = document.getElementById("hm-keyboard");
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  rows.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "hm-keyboard__row";
    row.split("").forEach(l => {
      const btn = document.createElement("button");
      btn.textContent = l;
      btn.className = "hm-key";
      btn.dataset.letter = l;
      btn.addEventListener("click", () => guess(l));
      rowDiv.appendChild(btn);
    });
    keyboard.appendChild(rowDiv);
  });

  document.addEventListener("keydown", e => {
    const l = e.key.toUpperCase();
    if (/^[A-Z]$/.test(l)) guess(l);
  });

  newGame();
});
