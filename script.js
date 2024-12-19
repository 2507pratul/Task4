const expenseForm = document.getElementById('expenseForm');
const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const expenseDateInput = document.getElementById('expenseDate');
const expenseList = document.getElementById('expenseList');
const totalExpenses = document.getElementById('totalExpenses');
const expenseCount = document.getElementById('expenseCount');

let expenses = [];

// Add new expense
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = expenseNameInput.value;
  const amount = parseFloat(expenseAmountInput.value).toFixed(2);
  const date = expenseDateInput.value;

  // Create expense object
  const expense = {
    name,
    amount,
    date,
  };

  // Add expense to list and update UI
  expenses.push(expense);
  updateUI();

  // Clear inputs
  expenseForm.reset();
});

// Update UI
function updateUI() {
  // Update expense list
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="expense-name">${expense.name}</span>
      <span>$${expense.amount} (${expense.date})</span>
      <button onclick="deleteExpense(${index})" class="delete-btn">❌</button>
    `;
    expenseList.appendChild(listItem);
  });

  // Update summary
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0).toFixed(2);
  totalExpenses.textContent = `$${total}`;
  expenseCount.textContent = expenses.length;
}

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateUI();
}
