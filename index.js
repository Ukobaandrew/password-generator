const Number = document.querySelector(".numbers");
const Range = document.querySelector(".range");
const passcode = document.getElementById("display");
const charactercase = document.getElementById("includecharacters");
const numberscase = document.getElementById("includenumbers");
const lowercase = document.getElementById("includelowercase");
const uppercase = document.getElementById("includeuppercase");
const symbolcase = document.getElementById("includesymbols");
const form = document.getElementById("form");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBERCASE_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLCASE_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
Number.addEventListener("input", syncCharacterAmount);
Range.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let upper = uppercase.Checked;
  let amount = Number.value;
  let symbols = symbolcase.Checked;
  let numbers = numberscase.checked;
  let password = generatepassword(amount, uppercase, numberscase, symbolcase);
  passcode.innerText = password;
});
function generatepassword(amount, uppercase, numberscase, symbolcase) {
  let chart = LOWERCASE_CHAR_CODES;
  if (uppercase) chart = chart.concat(UPPERCASE_CHAR_CODES);
  if (symbolcase) chart = chart.concat(SYMBOLCASE_CHAR_CODES);
  if (numberscase) chart = chart.concat(NUMBERCASE_CHAR_CODES);

  passwordcharacters = [];
  for (let i = 0; i < amount; i++) {
    let character = chart[Math.floor(Math.random() * chart.length)];
    passwordcharacters.push(String.fromCharCode(character));
  }
  return passwordcharacters.join("");
}
function arrayFromLowToHigh(Low, High) {
  const harray = [];
  for (let i = Low; i <= High; i++) {
    harray.push(i);
  }
  return harray;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  Number.value = value;
  Range.value = value;
}
