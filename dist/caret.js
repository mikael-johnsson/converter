"use strict";
const volumeCaret = document.getElementById('volume-caret');
const massCaret = document.getElementById('mass-caret');
const currencyCaret = document.getElementById('currency-caret');
const volumeParent = volumeCaret.parentElement;
const massParent = massCaret.parentElement;
const currencyParent = currencyCaret.parentElement;
if (volumeParent) {
    volumeParent.addEventListener('click', () => {
        volumeCaret.classList.toggle('fa-caret-down');
        volumeCaret.classList.toggle('fa-caret-up');
    });
}
if (massParent) {
    massParent.addEventListener('click', () => {
        massCaret.classList.toggle('fa-caret-down');
        massCaret.classList.toggle('fa-caret-up');
    });
}
if (currencyParent) {
    currencyParent.addEventListener('click', () => {
        currencyCaret.classList.toggle('fa-caret-down');
        currencyCaret.classList.toggle('fa-caret-up');
    });
}
//# sourceMappingURL=caret.js.map