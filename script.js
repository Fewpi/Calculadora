let numbers = document.querySelectorAll('.number')

let operadores = document.querySelectorAll('.operator')

let calcule = document.querySelector('.calculo')

let tela = document.querySelector('.screen')

let numberOne = 0
let numberTwo = 0
let indicador = false
let operadorar
let result 

operadores.forEach(operador => {
operador.addEventListener('click', () => {
    oper(operador.textContent)
})

function oper(operador){
    indicador = true
    operadorar = operador
    console.log(operador)
}

})

function calculo(number){
    if(indicador === false){
        numberOne += (number.textContent)
        tela.textContent = numberOne
        }else{
            numberTwo += (number.textContent)
            tela.textContent = numberTwo
        }
   console.log(numberOne, numberTwo)
}


numbers.forEach(number => {
    number.addEventListener('click', () => {       
        calculo(number)
        
    })
})

calcule.addEventListener('click', ()=>{
    solution(numberOne, numberTwo, operadorar)
})

function solution(numberOne, numberTwo, operadorar){
    if(result !== null){

   
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
            result = numberOne / numberTwo
            break
    }
  
    tela.textContent = result
    }
}

    