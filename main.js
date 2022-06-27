// setting a variable called "buttons" to select all elements with the class "button"
let buttons = document.querySelectorAll(".button");
console.log(buttons);

// setting a variable called "previous" to select the "previous-input" class
const previous = document.querySelector(".previous-input")

// setting a variable called "output" to select the "output" class
const output = document.querySelector(".output")

// function to clear/populate/calculate the display screen
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        switch(event.target.innerText){
            case 'C':
                output.innerText = "";
                previous.innerText = "";
                break;
            case "=":
                try {
                    output.innerText = eval(previous.innerText);
                }   catch {
                    output.innerText = "Error, clear and try again";
                }
                break;
            default:
                previous.innerText += event.target.innerText;
        }
    });
}








