import { escapeHtml } from './escape-html.js';
import { addTransactionToDOM, list } from './addTransactionToDOM.js';
import { generateID } from './generateID.js';
import { updateValues, transactions } from './updateDOM.js';
import { updateLocalStorage } from './localStorage.js';
import { removeTransaction } from './removeTransaction.js';

let sign;
const incomeBtn = document.querySelector('.income-btn');
const expenseBtn = document.querySelector('.expense-btn');
const form = document.getElementById('form');
const transactionName = document.getElementById('name');
const amount = document.getElementById('amount');

export function addButtonEventListeners() {
  incomeBtn.addEventListener('pointerup', (e) => {
    e.preventDefault();
    sign = '+';
  });
  expenseBtn.addEventListener('pointerup', (e) => {
    e.preventDefault();
    sign = '-';
  });
}
addButtonEventListeners();

export function addTransaction(e) {
  e.preventDefault();
  // ensure user chose income or expense
  if (!sign) {
    alert('Please ensure transaction is Income or Expense');
    return;
  }
  if (escapeHtml(transactionName.value.trim()) === '' || escapeHtml(amount.value.trim()) === '') {
    alert('Please add a name and amount');
  } else {
    const transaction = {
      id: generateID(),
      name: escapeHtml(transactionName.value.trim()),
      amount: +parseFloat(sign === '+' ? amount.value : amount.value * -1).toFixed(2),
      type: sign === '+' ? 'income' : 'expense',
    };

    Object.assign(transactions, { [transaction.id]: transaction });
    addTransactionToDOM(transaction);

    updateValues();

    updateLocalStorage();

    transactionName.value = '';
    amount.value = '';
  }
}
list.addEventListener('pointerup', removeTransaction);
form.addEventListener('submit', addTransaction);
