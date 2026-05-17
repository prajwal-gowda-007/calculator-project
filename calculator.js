let firstNum;
let secondNum;
let operator;

function add(a,b)
{
    return a + b;
};

function subtract(a,b)
{
    return a - b;
};

function multiply(a,b)
{
    return a * b;
};

function divide(a,b)
{
    return a / b;
};

function operate(a,b,operator)
{
    switch(operator)
    {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "×":
            return multiply(a,b);
        case "÷":
            return divide(a,b);
    }
};

const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers");
const operators =document.querySelectorAll(".operators");
const equals=document.querySelector(".equals");
const allClear = document.querySelector(".allClear")
const delBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear")

display.textContent="";
numbers.forEach(number => 
    {
        number.addEventListener("click",() => 
        { 
            if( display.textContent.includes(".") && number.textContent===".")
                { return }
            display.textContent+=number.textContent;
        })
    })

operators.forEach(operation => 
    { operation.addEventListener("click",() =>
        {
            firstNum=display.textContent;
            display.textContent=""
            display.textContent=operation.textContent;
            operator=display.textContent;
            display.textContent="";
        })
    })

equals.addEventListener("click",() =>
    {
        secondNum=display.textContent;
        let result = operate(+firstNum,+secondNum,operator);
        display.textContent=result;
    })

allClear.addEventListener("click",()=>
    {
        firstNum ="";
        secondNum ="";
        operator ="";
        display.textContent="";
    })

delBtn.addEventListener("click",()=>
    {
        display.textContent=display.textContent.slice(0,-1);
    })

clear.addEventListener("click",()=>
    {
        display.textContent="";
    })

