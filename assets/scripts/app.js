const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return +userInput.value
}

// Generates and wirtes calculation log
function createAndWirteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(identifier, previousResult, operationNumber, newResult) {
    const logEntry = {
        operation: identifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries)
}

function calculateResult(calculationType) {
    if (calculationType !== "ADD" && calculationType !== "SUBTRACT" && calculationType !== "MULTIPLY" && calculationType !== "DIVIDE") return;
    let newValue = getUserNumberInput();
    const initialValue = currentResult;
    let mathOperation;
    switch (calculationType) {
        case "ADD":
            currentResult += newValue;
            mathOperation = "+";
            break;
        case "SUBTRACT":
            currentResult -= newValue;
            mathOperation = "-";
            break;
        case "MULTIPLY":
            currentResult *= newValue;
            mathOperation = "*";
            break;
        case "DIVIDE":
            currentResult /= newValue;
            mathOperation = "/";
            break;
    }
    createAndWirteOutput(mathOperation, initialValue, newValue);
    writeToLog(calculationType, initialValue, newValue, currentResult)
}

addBtn.addEventListener('click', calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener('click', calculateResult.bind(this, "SUBTRACT"))
multiplyBtn.addEventListener('click', calculateResult.bind(this, "MULTIPLY"))
divideBtn.addEventListener('click', calculateResult.bind(this, "DIVIDE"))
