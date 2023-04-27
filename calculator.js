// Function display
const display = (val) => {
  document.getElementById("calcResult").value += val;
};

// Function calculate
const calculate = () => {
  let input = document.getElementById("calcResult").value;
  let result = eval(input);
  document.getElementById("calcResult").value = result;
};

// Function clearScreen
const clearScreen = () => {
  document.getElementById("calcResult").value = "";
};

// Function deleteChar
const deleteChar = () => {
  let str = document.getElementById("calcResult").value;
  str = str.slice(0, -1);
  document.getElementById("calcResult").value = str;
};
