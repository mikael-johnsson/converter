"use strict";
const volumeSwitchButton = document.getElementById('volume-switch-button');
const massSwitchButton = document.getElementById('mass-switch-button');
const currencySwitchButton = document.getElementById('currency-switch-button');
function switchTypes(e) {
    e.preventDefault();
    const button = e.target;
    let fromSelect = null;
    let toSelect = null;
    if (button.id === 'volume-switch-button') {
        fromSelect = document.getElementById('volume-from-select');
        toSelect = document.getElementById('volume-to-select');
    }
    else if (button.id === 'mass-switch-button') {
        fromSelect = document.getElementById('mass-from-select');
        toSelect = document.getElementById('mass-to-select');
    }
    else if (button.id === 'currency-switch-button') {
        fromSelect = document.getElementById('currency-from-select');
        toSelect = document.getElementById('currency-to-select');
    }
    else {
        return;
    }
    if (fromSelect && toSelect) {
        const oldFromValue = fromSelect.value;
        const oldToValue = toSelect.value;
        fromSelect.value = oldToValue;
        toSelect.value = oldFromValue;
    }
}
volumeSwitchButton === null || volumeSwitchButton === void 0 ? void 0 : volumeSwitchButton.addEventListener('click', switchTypes);
massSwitchButton === null || massSwitchButton === void 0 ? void 0 : massSwitchButton.addEventListener('click', switchTypes);
currencySwitchButton === null || currencySwitchButton === void 0 ? void 0 : currencySwitchButton.addEventListener('click', switchTypes);
//# sourceMappingURL=switch.js.map