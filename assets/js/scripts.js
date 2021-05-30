const eventElements = (item, itemValue) => {
    item.addEventListener('input', e => {
        itemValue.value = e.target.value
    })
}
const btnCalc = document.querySelector('button')

const weight = document.querySelector('#weight')
const weightValue = document.querySelector('#weightValue')
const height = document.querySelector('#height')
const heightValue = document.querySelector('#heightValue')

const valueIndex = document.querySelector('#valueIndex')
const textIndex = document.querySelector('#textIndex')

eventElements(weight, weightValue)
eventElements(height, heightValue)

const calcIMC = e => {
    e.preventDefault();
    const imc = (weight.value / (height.value * height.value)).toFixed(1)
    
    if (weight.value == 0) {
        valueIndex.textContent = '00.0'
        textIndex.textContent = 'Informe seu peso'
    } else if (height.value == 0) {
        valueIndex.textContent = '00.0'
        textIndex.textContent = 'Informe sua altura'
    } else {
        valueIndex.textContent = imc

        if (imc < 18.5) {
            textIndex.textContent = 'Abaixo do peso'
        } else if (imc < 25) {
            textIndex.textContent = 'Peso ideal'
        } else if (imc < 30) {
            textIndex.textContent = 'Levemente acima do peso'
        } else if (imc < 35) {
            textIndex.textContent = 'Obesidade grau I'
        } else if (imc < 40) {
            textIndex.textContent = 'Obesidade grau II'
        } else if (imc > 40) {
            textIndex.textContent = 'Obesidade grau III'
        }
    
    }

}

btnCalc.addEventListener('click', calcIMC)