import { updateDOM } from './updateDOM.js';
import { addButtonEventListeners } from './addTransaction.js';

export * from './addTransaction.js';
export * from './addTransactionToDOM.js';
export * from './generateID.js';
export * from './localStorage.js';
export * from './removeTransaction.js';
export * from './updateDOM.js';

document.addEventListener('DOMContentLoaded', addButtonEventListeners);

updateDOM();
