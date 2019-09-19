let outputField: HTMLDivElement = <HTMLDivElement>document.getElementById("outputField");

let doItButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("doItButton");
doItButton.addEventListener("click", () => 
{
    let inputFieldElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
    let inputString: string = inputFieldElement.value;

    let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("dropdown");
    let selectedOptionIndex: number = selectElement.selectedIndex;
    let selectedOption: string = selectElement.options[selectedOptionIndex].innerHTML;

    if (selectedOption === "TOUPPERCASE") 
    {
        toUppercase(inputString);
    }
    else if (selectedOption === "tolowercase") 
    {
        toLowercase(inputString);
    }
    else if (selectedOption === "Letter Count") 
    {
        LetterCount(inputString);
    }
})


function toUppercase(input: string): void 
{
    outputField.innerHTML = input.toUpperCase();
}

function toLowercase(input: string): void 
{
    outputField.innerHTML = input.toLowerCase();
}

function LetterCount(input: string): void 
{
    let stringWithoutStuff: string = input.replace(/ /g,'');
    let outputString: string = stringWithoutStuff.length.toString();

    outputField.innerHTML = outputString;
}
