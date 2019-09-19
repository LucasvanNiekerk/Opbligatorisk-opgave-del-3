var outputField = document.getElementById("outputField");
var doItButton = document.getElementById("doItButton");
doItButton.addEventListener("click", function () {
    var inputFieldElement = document.getElementById("inputField");
    var inputString = inputFieldElement.value;
    var selectElement = document.getElementById("dropdown");
    var selectedOptionIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedOptionIndex].innerHTML;
    if (selectedOption === "TOUPPERCASE") {
        toUppercase(inputString);
    }
    else if (selectedOption === "tolowercase") {
        toLowercase(inputString);
    }
    else if (selectedOption === "Letter Count") {
        LetterCount(inputString);
    }
});
function toUppercase(input) {
    outputField.innerHTML = input.toUpperCase();
}
function toLowercase(input) {
    outputField.innerHTML = input.toLowerCase();
}
function LetterCount(input) {
    var stringWithoutStuff = input.replace(/ /g, '');
    var outputString = stringWithoutStuff.length.toString();
    outputField.innerHTML = outputString;
}
