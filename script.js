let numbers = document.querySelectorAll('.number')

let operadores = document.querySelectorAll('.operator')

let numberOne = 0
let numberTwo = 0
let indicador = false
let operador = ''


operadores.forEach(operador => {
operador.addEventListener('click', () => {
    operacao(operador)
    indicador = true
    
})

function operacao(operador){
    console.log(indicador)
    
}



})

function calculo(number){
    if(indicador === false){
        numberOne += (number.textContent)
        }else{
            numberTwo += (number.textContent)
        }
   console.log(numberOne, numberTwo)
}


numbers.forEach(number => {
    number.addEventListener('click', () => {       
        calculo(number)
        
    })
})


