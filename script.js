const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const temp = document.querySelector("#temp").value
    const units = document.querySelector("#units").value

    // Celsius

    const celToFah = (celsius) => {
        let fahrenheit = ((celsius * 9 / 5) + 32)
        return fahrenheit
    }

    const celToKel = (celsius) => {
        let kelvin = (celsius + 273.15)
        return kelvin
    }

    // Fahrenheit

    const fahToCel = (fahrenheit) => {
        let celsius = ((fahrenheit - 32) / 1.8)
        return celsius
    }

    const fahToKel = (fahrenheit) => {
        let kelvin = ((fahrenheit - 32) / 1.8 + 273.15)
        return kelvin
    }

    // Kelvin

    const kelToCel = (kelvin) => {
        let celsius = (kelvin - 273.15)
        return celsius
    }

    const kelToFah = (kelvin) => {
        let fahrenheit = ((kelvin - 273.15) * 9 / 5 + 32)
        return fahrenheit
    }

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = 'Please enter valid input'
    }
    else{
        if (units === 'celsius') {
            result = celToFah(temp)
            resultalt = celToKel(temp)
            document.querySelector('#result').innerHTML = `${result.toFixed(2)}° Fahrenheit`;
            document.querySelector('#resultalt').innerHTML = `${resultalt.toFixed(2)}° Kelvin`;
            console.log(result);
            console.log(resultalt);
        }
        else if(units === 'fahrenheit'){
            result = fahToCel(temp)
            resultalt = fahToKel(temp)
            document.querySelector('#result').innerHTML = `${result.toFixed(2)}° Celsius`;
            document.querySelector('#resultalt').innerHTML = `${resultalt.toFixed(2)}° Kelvin`;
            console.log(result);
            console.log(resultalt);
        }
        else{
            result = kelToCel(temp)
            resultalt = kelToFah(temp)
            document.querySelector('#result').innerHTML = `${result.toFixed(2)}° Celsius`;
            document.querySelector('#resultalt').innerHTML = `${resultalt.toFixed(2)}° Fahrenheit`;
        }
    }

})
