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

function calculateResult(calculationType){
    if(calculationType === "ADD" && calculationType !== "SUBTRACT" && calculationType !== "MULTIPLY" && calculationType !== "DIVIDE") return;
    let newValue = getUserNumberInput();
    const initialValue = currentResult;
    let mathOperation;
    if(calculationType === "ADD"){
        currentResult += newValue;
        mathOperation = "+"
    } else if (calculationType === "SUBTRACT"){
        currentResult -= newValue;
        mathOperation = "-"
    } else if (calculationType === "MULTIPLY"){
        currentResult *= newValue;
        mathOperation = "*"
    } else if (calculationType === "DIVIDE"){
        currentResult /= newValue;
        mathOperation = "/"
    }
    createAndWirteOutput(mathOperation, initialValue, newValue);
    writeToLog(calculationType, initialValue, newValue, currentResult)
}

function add() {
    calculateResult("ADD")
}

function subtract(){
    calculateResult("SUBTRACT")
}

function multiply() {
    calculateResult("MULTIPLY")
}

function divide() {
    calculateResult("DIVIDE")
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
