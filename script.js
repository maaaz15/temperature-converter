const calculateTemp = () =>{
    let temp = document.getElementById('temp').value;

    let units = document.getElementById('units');
    const unitsType = units.options[units.selectedIndex].value;

    const celToFar = (cel) =>{
        let Farenheit = ((cel * 1.8) + 32);
        return Farenheit;
    }

    const farToCel = (far) =>{
        let Celsius = ((far - 32) / 1.8);
        return Celsius;
    }

    // const kelToCel = (kel) =>{
    //     let Kelvin = (cel + 273.15);
    //     return Kelvin;
    // }
    // const celToKel = (cel) =>{
    //     let Celsius = (cel - 273.15);
    //     return Celsius;
    // }
    // const kelToFar = (kel) =>{
    //     let Kelvin = (((kel - 273.15) * 1.8) + 32);
    //     return Kelvin;
    // }
    // const farToKel = (far) =>{
    //     let Kelvin = (((far - 32) / 1.8) + 273.15);
    //     return Kelvin;
    // }

    let result;

    if(unitsType == 'cel'){
        result = celToFar(temp);
        document.querySelector('.result').innerHTML = `${result.toFixed(2)}° Farenheit`;
    }
    else{
        result = farToCel(temp);
        document.querySelector('.result').innerHTML = `${result.toFixed(2)}° Celsius`;
    }
}
