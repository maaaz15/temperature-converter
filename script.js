const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const temp = parseInt(document.querySelector("#temp").value)
    const units = document.querySelector("#units").value

    const celToFah = (celcius) => {
        let fahrenheit = ((celcius * 9 / 5) + 32)
        return fahrenheit
    }

    const fahToCel = (fahrenheit) => {
        let celcius = ((fahrenheit - 32) * 5 / 9)
        return celcius
    }

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = 'Please enter valid input'
    }
    else{
        if (units === 'celcius') {
            result = celToFah(temp)
            document.querySelector('#result').innerHTML = `${result.toFixed(2)}° Fahrenheit`;
            console.log(result);
        }
        else{
            result = fahToCel(temp)
            document.querySelector('#result').innerHTML = `${result.toFixed(2)}° Celsius`;
            console.log(result);
        }
    }

})
