let numbers = document.querySelectorAll('.number')

let operadores = document.querySelectorAll('.operator')

let numberOne = 0
let numberTwo = 0
let operador 


operadores.forEach(operador => {
operador.addEventListener('click', () => {
    return(operador = true)
  
})

})

numbers.forEach(number => {
    number.addEventListener('click', () => {       
        if(operador === false){
        numberOne = (parseFloat(number.textContent))
        }else{
            numberTwo = (parseFloat(number.textContent))
        }
        
        console.log(numberOne, numberTwo)
    })
})