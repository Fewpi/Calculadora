let numbers = document.querySelectorAll('.number')

let operadores = document.querySelectorAll('.operator')

let calcule = document.querySelector('.calculo')

let tela = document.querySelector('.screen')

let clear = document.querySelector('.clean')

let numberOne = 0
let numberTwo = 0
let indicador = false
let operadorar
let result 
let calculoOk

operadores.forEach(operador => {
operador.addEventListener('click', () => {
    oper(operador.textContent)
    })
})


numbers.forEach(number => {
    number.addEventListener('click', () =>{ if(!calculoOk){calculo(number)
        }
    })
})

calcule.addEventListener('click', ()=>{
    solution(numberOne, numberTwo, operadorar)
    calculoOk = true
})

clear.addEventListener('click', () => {
    limpar()
})


function calculo(number){
    if (calculoOk){
        numberOne = result.toString()
        numberTwo = ''
        calculoOk = false
        indicador = false
    }


    if(!indicador){
        numberOne += (number.textContent)
        tela.textContent = numberOne
        }else{
            numberTwo += (number.textContent)
            tela.textContent = numberTwo
        }
}

function oper(operador){
    if(calculoOk){
        numberOne = result.toString()
        numberTwo = ''
        calculoOk = false
    }
    
    if (numberOne && operadorar && numberTwo) {
        solution(numberOne, numberTwo, operadorar);
        numberOne = result.toString(); 
        numberTwo = ""; 
        calculoOk = false
    } else if (!numberOne) {
        numberOne = tela.textContent;
    }

    console.log(numberOne, numberTwo)


    indicador = true
    operadorar = operador
    tela.textContent = operadorar
}



function solution(numberOne, numberTwo, operadorar){
    
    numberOne = parseFloat(numberOne)
    numberTwo = parseFloat(numberTwo)
    
    switch(operadorar){
        case "+":
            result = numberOne + numberTwo
            break
        case "-":
            result = numberOne - numberTwo
            break
        case "*":
            result = numberOne * numberTwo
            break
        case "/":
            result = numberOne / numberTwo5
            break
    }
    tela.textContent = result
    indicador = false
    calculoOk = true
    }

function limpar(){
    tela.textContent = 0
    numberOne = 0
    numberTwo = 0
    indicador = false
    calculoOk = false 
    result = 0  
    calculo
}

    
