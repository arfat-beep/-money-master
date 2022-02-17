function inputToValue(inputName) {
  const input = document.getElementById(inputName);
  const value = parseInt(input.value);
  return value;
}

// calculate button handling
document.getElementById("calculate").addEventListener("click", function () {
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
