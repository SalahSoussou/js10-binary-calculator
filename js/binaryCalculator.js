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
