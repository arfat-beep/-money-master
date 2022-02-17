// function for convert input to integer value
function inputToValue(inputName) {
  const input = document.getElementById(inputName);
  let inputValue;
  //   checking the value is empty or not
  if (input.value == "") {
    inputValue = 0;
  } else {
    inputValue = parseInt(input.value);
  }
  //   checking value is string and negative number or not
  if (isNaN(inputValue) || inputValue <= 0) {
    showError(inputName);
  }

  console.log(inputValue, typeof inputValue);
  return inputValue;
}
function showError(wrong) {
  const error_1 = document.getElementById("error-1");
  const error_2 = document.getElementById("error-2");
  const calculation_1 = document.getElementById("calculation-1");
  const calculation_2 = document.getElementById("calculation-2");
  error_1.innerText =
    " ⚠️  You can't write anything accept positive number " +
    "add positive number is " +
    wrong;
  error_2.innerText =
    " ⚠️  You can't write anything accept positive number " +
    "add positive number is " +
    wrong;

  error_1.style.display = "block";
  error_2.style.display = "block";
  calculation_1.style.display = "none";
  calculation_2.style.display = "none";
}
function showCalculation() {
  const error_1 = document.getElementById("error-1");
  const error_2 = document.getElementById("error-2");
  const calculation_1 = document.getElementById("calculation-1");
  const calculation_2 = document.getElementById("calculation-2");
  error_1.style.display = "none";
  error_2.style.display = "none";
  calculation_1.style.display = "block";
  calculation_2.style.display = "block";
}
// calculate button handling
document.getElementById("calculate").addEventListener("click", function () {
  showCalculation();
  // income value
  const incomeValue = inputToValue("income");

  //   food value
  const foodValue = inputToValue("food");

  //   rent value
  const rentValue = inputToValue("rent");

  //   cloth value
  const clothesValue = inputToValue("clothes");

  //   total Expenses
  totalExpenses = document.getElementById("total-expenses");

  //   existing balance
  const balance = document.getElementById("balance");

  //   calculate total expenses
  const totalExpensesValue = foodValue + rentValue + clothesValue;
  totalExpenses.innerText = totalExpensesValue;

  //   calculate existing balance
  const balanceValue = incomeValue - totalExpensesValue;
  balance.innerText = balanceValue;
});

// savings button handling
document.getElementById("save-btn").addEventListener("click", function () {
  // savings value
  let savingsValue = inputToValue("save");
  savingsValue = savingsValue / 100;
  console.log(savingsValue);

  //   calculate savings in value
  let incomeValue = inputToValue("income");
  let totalSavings = incomeValue * savingsValue;

  //   saving
  const saving = document.getElementById("savings");
  saving.innerText = totalSavings;
});
