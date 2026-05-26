let firstNum="";
let secondNum="";
let operator="";

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
    if(b === 0)
        {
            return "Nope no 0's";
        }
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
let shouldClearDisplay = false;

display.textContent="";
numbers.forEach(number => 
    {
        number.addEventListener("click",() => 
        { 
            if(shouldClearDisplay)
                {
                    display.textContent="";
                    shouldClearDisplay=false;
                };

            if(display.textContent.includes(".") && number.textContent===".")
                { return }

            if(display.textContent.length >= 12)
                { return }

            display.textContent+=number.textContent;
        })
    })

operators.forEach(operation => 
    { operation.addEventListener("click",() =>
        {

            if(firstNum!=="" && operator!=="")
                {
                    if(firstNum!=="" && operator!=="" && shouldClearDisplay)
                        {
                            operator=operation.textContent;
                            return;
                        };
                    secondNum=display.textContent;
                    let result = resultLimit(operate(+firstNum,+secondNum,operator))
                    if(result === "Nope no 0's"){
                    display.textContent=result;
                    firstNum="";
                    secondNum="";
                    operator=""; 
                    return;}
                    display.textContent=result;
                    firstNum=display.textContent;
                    operator=operation.textContent;
                    shouldClearDisplay = true;
                }
                else
                {
                    firstNum = display.textContent;
                    operator=operation.textContent;
                    shouldClearDisplay = true;
                }
        })
    })

equals.addEventListener("click",() =>
    {
        secondNum=display.textContent;
        if(firstNum==="" || secondNum ==="" || operator===""){ return };
        let result = resultLimit(operate(+firstNum,+secondNum,operator));
        if(result === "Nope no 0's")
            {
                display.textContent=result;
                firstNum="";
                secondNum="";
                operator=""; 
                return;
            }
        display.textContent=result;
        shouldClearDisplay=true;
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

function resultLimit(result)
{
  result = result.toString();
  if(result.length >= 12)
    {
        result = (+result).toFixed(3);

        if(result.length > 12)
            {
                result = result.slice(0,13)
            }
    };
  return result;
}

