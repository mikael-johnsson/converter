const volumeSwitchButton = document.getElementById('volume-switch-button') as HTMLButtonElement
const massSwitchButton = document.getElementById('mass-switch-button') as HTMLButtonElement

function switchTypes(e: MouseEvent): void {
    e.preventDefault()
    const button = e.target as HTMLButtonElement
    let fromSelect: HTMLSelectElement | null = null;
    let toSelect: HTMLSelectElement | null = null;

    if(button.id === 'volume-switch-button'){
        fromSelect = document.getElementById('volume-from-select') as HTMLSelectElement | null;
        toSelect = document.getElementById('volume-to-select') as HTMLSelectElement | null;
    } else if(button.id === 'mass-switch-button'){
        fromSelect = document.getElementById('mass-from-select') as HTMLSelectElement | null;
        toSelect = document.getElementById('mass-to-select') as HTMLSelectElement | null;
    } else {
        return;
    }
    if(fromSelect && toSelect){
        const oldFromValue: string = fromSelect.value
        const oldToValue: string = toSelect.value
        fromSelect.value = oldToValue
        toSelect.value = oldFromValue
    }
}

volumeSwitchButton?.addEventListener('click', switchTypes)
massSwitchButton?.addEventListener('click', switchTypes)