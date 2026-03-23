let currentOperand = '';
let previousOperand = '';
let operator = null;
let equal;

const numberButtons = document.querySelectorAll('.numbers');
const displayScreen = document.querySelector('.display-panel');
const operatorButtons = document.querySelectorAll('.operators');
const equalButton = document.querySelector('.equals');
const funcButton = document.querySelectorAll('.function');

numberButtons.forEach(button =>{
        button.addEventListener('click', () =>{
            currentOperand += button.innerText;
            displayScreen.innerText = currentOperand;
        })
});

operatorButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        operator = button.innerText;
        previousOperand = currentOperand;
        currentOperand = '';
        displayScreen.innerHTML = operator;
    })
});

equalButton.addEventListener('click', () =>{
            if(currentOperand === '' || previousOperand === ''){
                return
            }
        
            let prev = parseFloat(previousOperand);
            let curr = parseFloat(currentOperand);
            let total = 0;
            if(operator == '+'){
                total = prev + curr;
            }else if(operator == '-'){
                total = prev - curr;
            }else if(operator == 'x'){
                total = prev * curr;
            }else if(operator == '÷'){
                total = prev / curr;
            }else{
                return
            }
            currentOperand = total;
            previousOperand = '';
            operator = null;
            displayScreen.innerHTML = total;
})
        
funcButton.forEach(button => {
    button.addEventListener('click', () =>{
        let func = button.innerText;
        
        if(currentOperand === '' && func != "Ac"){
            return
        }
        if(func == "Ac"){
            currentOperand = '';
            previousOperand = '';
            operator = '';
        }
        else if(func == "+/-"){
            currentOperand = (parseFloat(currentOperand) * -1).toString();
        }else if(func == "%"){
            currentOperand = (parseFloat(currentOperand) / 100).toString();
        }else{
            return
        }


        displayScreen.innerText = currentOperand; 
    })
})



