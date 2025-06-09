const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passOneEl = document.getElementById("pass-1");
let passTwoEl = document.getElementById("pass-2");

function passwordGen() {
  let password = "";
  for (let i = 0; i < 12; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  console.log(password);
  return password;
}

let passOne = "";
let passTwo = "";
document.getElementById("gen-btn").addEventListener("click", function () {
  passOne = passwordGen();
  passTwo = passwordGen();
  console.log("Pass-1" + passOne);
  console.log("Pass-2" + passTwo);
  passOneEl.textContent = passOne;
  passTwoEl.textContent = passTwo;

  document.getElementById("password-container").style.display = "flex";
});

document.getElementById("pass-1").addEventListener("click", () => {
  navigator.clipboard
    .writeText(passOne)
    .then(() => {
      console.log("Text copied to clipboard");

      document.getElementById("message").textContent =
        "Text copied to clipboard!";
      document.getElementById("message").style.display = "block";
    })
    .catch((err) => {
      console.error("Failed to copy: " + err);
    });
});

document.getElementById("pass-2").addEventListener("click", () => {
  navigator.clipboard
    .writeText(passTwo)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: " + err);
    });
});
