let result = document.getElementById('result');

function getResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deleteCharacter() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    result.value = eval(result.value);
}
