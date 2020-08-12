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

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left = 0, right = items.length - 1) {
    if (items.length > 1) {
        const index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

sortHandler.addEventListener('click', outputString);
