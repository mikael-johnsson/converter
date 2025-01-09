const massInputBox = document.getElementById('mass-input-box') as HTMLInputElement;
const massOutputBox = document.getElementById('mass-output-box') as HTMLParagraphElement;
const massConvertButton = document.getElementById('mass-convert-button') as HTMLButtonElement;


/**
 * Checks the types of mass to convert from and to
 * and converts the input to grams
 * @param e event from the button click
 */
function checkTypes(e: MouseEvent): void {
    e.preventDefault();
    const fromType = document.getElementById('mass-from-select') as HTMLSelectElement
    const toType = document.getElementById('mass-to-select') as HTMLSelectElement
    const fromTypeValue = fromType.value
    const toTypeValue = toType.value
    let inputValue: number = massCheckForCommas(massInputBox.value)

    let gValue = 0;

    if(fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    } else {
        switch(fromTypeValue) {
            case 'lbs':
                gValue = 453.592
                break;
            case 'kilo':
                gValue = 1000
                break;
            case 'grams':
                gValue = 1
                break;
            case 'ounce':
                gValue = 28.3495
                break;
            default: alert('Please select a valid type');
        }
        gValue = gValue * inputValue
    }
}

/**
 * 
 * @param input the input value from the user
 * @returns value of the input with commas replaced by dots
 */
function massCheckForCommas(input: string ): number {
    const transformedInput = input.replace(',', '.')
    return parseFloat(transformedInput)
}


/**
 * Calculates the mass in the desired type and displays it
 * @param input the input value from the user
 * @param toType type of mass to convert to
 */
function calculateMass(input: number, toType: string){
    switch(toType){
        case 'lbs':
            massOutputBox.innerHTML = `${(input / 453.592).toFixed(2)} lbs`
            break;
        case 'kilo':
            massOutputBox.innerHTML = `${(input / 1000).toFixed(2)} kilos`
            break;
        case 'grams':
            massOutputBox.innerHTML = `${(input).toFixed(0)} grams`
            break;
        case 'ounce':
            massOutputBox.innerHTML = `${(input / 28.3495).toFixed(2)} ounces`
            break;
        default: alert('Please select a valid type');
    }
}

// Eventlistener for the convert button
massConvertButton?.addEventListener('click', checkTypes)
