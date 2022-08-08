const res = document.getElementById("res");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
let operand1 = [];
let operand2 = [""];
let operater;
let operaterClicked = false;

btn0.addEventListener("click", () => {
  if (!operaterClicked) {
    operand1.push(0);
    res.innerHTML = operand1.join("");
  } else if (operaterClicked) {
    operand2.push(0);
    res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
  }
});

btn1.addEventListener("click", () => {
  if (!operaterClicked) {
    operand1.push(1);
    res.innerHTML = operand1.join("");
  } else if (operaterClicked) {
    operand2.push(1);
    res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
  }
});

btnSum.addEventListener("click", () => {
  operaterClicked = true;
  operater = "+";
  res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
});

btnSub.addEventListener("click", () => {
  operaterClicked = true;
  operater = "-";
  res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
});

btnMul.addEventListener("click", () => {
  operaterClicked = true;
  operater = "*";
  res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
});

btnDiv.addEventListener("click", () => {
  operaterClicked = true;
  operater = "/";
  res.innerHTML = `${operand1.join("")}${operater}${operand2?.join("")}`;
});

btnClr.addEventListener("click", () => {
  operand1 = [];
  operand2 = [];
  operaterClicked = false;
  operater;
  res.innerHTML = "";
});

btnEql.addEventListener("click", () => {
  let num1 = parseInt(operand1.join(""), 2);
  let num2 = parseInt(operand2?.join(""), 2);
  let rusult =
    operater === "+"
      ? num1 + num2
      : operater === "-"
      ? num1 - num2
      : operater === "*"
      ? num1 * num2
      : num1 / num2;
  res.innerHTML = rusult.toString(2);
  operand1 = [];
  operand2 = [];
  operaterClicked = false;
  operater;
});
