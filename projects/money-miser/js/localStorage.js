import { transactions } from './updateDOM.js';

export function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}
