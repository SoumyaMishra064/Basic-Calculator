let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = " ";  // rsult store karege
let arr = Array.from(button);  // button variable pass karege
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            // Evaluate the string and update the input box
            try {
                string = eval(string) || "";
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            // Clear the string
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            // Delete the last character
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Append any other button's value
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
