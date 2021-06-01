// funcao que escuta os valores dos inputs
const eventElements = (item, itemValue) => {
    item.addEventListener('input', e => {
        itemValue.value = e.target.value
    })
}

// mapeando elementos
const btnCalc = document.querySelector('button')
const weight = document.querySelector('#weight')
const weightValue = document.querySelector('#weightValue')
const height = document.querySelector('#height')
const heightValue = document.querySelector('#heightValue')
const valueIndex = document.querySelector('#valueIndex')
const textIndex = document.querySelector('#textIndex')

// executando a funcao que escuta os inputs
eventElements(weight, weightValue)
eventElements(height, heightValue)
eventElements(weightValue, weight)
eventElements(heightValue, height)

// variaveis para armazenar os valores dos atributos dos inputs
const maskHeightOptions = {
    mask: heightValue.value,
    min: heightValue.min,
    max: heightValue.max
}
const maskWeightOptions = {
    mask: weightValue.value,
    min: weightValue.min,
    max: weightValue.max
}

// variaveis que aplicam a funcao IMask nas variaveis
const maskHeight = IMask(heightValue, maskHeightOptions)
const maskWeight = IMask(weightValue, maskWeightOptions)

// funcao que calcula o IMC
const calcIMC = e => {
    e.preventDefault();
    const imc = (weightValue.value / (heightValue.value * heightValue.value)).toFixed(1)
    
    if (weightValue.value == 0) {
        valueIndex.textContent = '00.0'
        textIndex.textContent = 'Informe seu peso'
    } else if (heightValue.value == 0) {
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

// escuta o clique do botao e aplica a funcao que calcula o IMC
btnCalc.addEventListener('click', calcIMC)