const volumeCaret = document.getElementById('volume-caret') as HTMLElement;
const massCaret = document.getElementById('mass-caret') as HTMLElement;
const currencyCaret = document.getElementById('currency-caret') as HTMLElement;

const volumeParent = volumeCaret.parentElement as HTMLElement;
const massParent = massCaret.parentElement as HTMLElement;
const currencyParent = currencyCaret.parentElement as HTMLElement;


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