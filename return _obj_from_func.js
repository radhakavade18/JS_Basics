function calculateTemp(fehrenhite) {
    let celsious = (fehrenhite - 32) * 5/9;

    let kelvin = (fehrenhite - 32) * 5/9 + 273.15;

    return {
        fehrenhite : fehrenhite,
        celsious : celsious,
        kelvin: kelvin
    }
}

let getTemp = calculateTemp(32);

console.log(getTemp.kelvin);
console.log(getTemp.celsious);
console.log(getTemp.fehrenhite);