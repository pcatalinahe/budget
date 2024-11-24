//Setting DOM manipulation
let incomeAmount = document.getElementById("income-amount");
const incomeBtn = document.getElementById("income-amount-btn");
const expenseTitle = document.getElementById("expense-title");
let expenseAmount = document.getElementById("expense-amount");
const expenseBtn = document.getElementById("expense-amount-btn");

const incomeDisplay = document.getElementById("income-display");
const expenseDisplay = document.getElementById("expense-display");
const balanceDisplay = document.getElementById("balance-display");

const expensesList = document.getElementById("expenses-list");
let totalIncome = 0;

//function for income btn/set budget

incomeBtn.addEventListener("click", () => {
  totalIncome = incomeAmount.value;
  if (incomeAmount.value <= 0) {
    alert('please enter a valid value (no "$" or special characters, etc.)');
  }
  incomeDisplay.innerText = totalIncome;
  console.log(typeof incomeDisplay);
  balanceDisplay.innerText = totalIncome - expenseDisplay.innerText;

  incomeAmount.value = "";
});

//function to display expense items
const listItem = (expenseName, expenseValue) => {
  // create new HTML element
  let listElements = document.createElement("div");
  //   class for styling
  listElements.classList.add("list-element");
  listElements.innerHTML = `<p class="product"> ${expenseName}</p> <p class="product-amount"> $${expenseValue} </p>`;

  expensesList.appendChild(listElements);
};

//function for expense btn
expenseBtn.addEventListener("click", () => {
  let expendings = parseFloat(expenseAmount.value);
  if (expenseAmount.value <= 0) {
    alert(`Please enter a valid expense value (no "$" or special characters, etc.)`);
    return;
  }

  //update expense display
  let sum = parseFloat(expenseDisplay.innerText || 0) + expendings;
  expenseDisplay.innerText = sum;

  //update balance display
  const totalBalance = totalIncome - sum;
  balanceDisplay.innerText = totalBalance;
  console.log(typeof balanceDisplay);

  listItem(expenseTitle.value, expenseAmount.value);

  //clear input fields
  expenseTitle.value = "";
  expenseAmount.value = "";
});
