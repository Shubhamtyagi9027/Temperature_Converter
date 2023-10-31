let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#Fahrenheit > input')
let kelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number*100)/100
    
}
celciusInput.addEventListener('input',function(){
    let celTem = parseFloat(celciusInput.value)
    let ferTem = (celTem*(9/5)) + 32
    let kelTem = celTem + 273.15
    fahrenheitInput.value = roundNumber(ferTem)
    kelvinInput.value = roundNumber(kelTem)
})

fahrenheitInput.addEventListener('input',function(){
    let ferTem = parseFloat(fahrenheitInput.value)
    let celTem = (ferTem - 32)*(5/9)
    let kelTem = (ferTem - 32)*(5/9) + 273.15
    celciusInput.value = roundNumber(celTem)
    kelvinInput.value = roundNumber(kelTem)
})

kelvinInput.addEventListener('input',function(){
    let kelTem = parseFloat(kelvinInput.value)
    let celTem = kelTem - 273.15
    let ferTem = (kelTem - 273.15) * (9/5) + 32
   
    fahrenheitInput.value = roundNumber(ferTem)
    celciusInput.value = roundNumber(celTem)
})

btn.addEventListener('click', function(){
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})