const sortHandler = document.getElementById('sort');
const input = document.getElementById('input');

function showError() {
    document.getElementById('validationError').innerHTML = 'Array contains non number elements.';
}

function removeError() {
    document.getElementById('validationError').innerHTML = '';
}

function parseInputValueToArray() {
    return input.value
        .replace(new RegExp('\n', 'g'), '')
        .split(',')
        .map(item => parseInt(item));
}

function getInputData() {
    let isValid = true;
    const inputArray = parseInputValueToArray();

    inputArray.forEach(elem => {
        if (isNaN(elem)) {
            showError();
            isValid = false;
        }
    });
    return isValid ? inputArray : undefined;
}

function outputString() {
    const inputArray = getInputData(),
        length = inputArray.length;

    if (inputArray) {
        removeError();
        let sortedArr = quickSort(inputArray);
        document.getElementById('output').value = sortedArr.join(', ');
        document.getElementById('numbers-of-el').innerHTML = length;
    }
}

function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[0],
        left = [],
        right = [];

    for (let i = 1; i < arr.length; i++) {
        pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

sortHandler.addEventListener('click', outputString);
