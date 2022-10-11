const saludos = [
    'Bienvenido al convertidor de unidades.',
    'Gracias por usar nuestra aplicacion.',
];

alert(saludos[0]);

function temperatura() {
    let optionTemp = prompt(
        'Elija la conversion a realizar:\n1- Celsius a Fahrenheit.\n2- Fahrenheit a Celsius.\n3- Celsius a Kelvin.\n4- Kelvin a Celsius.\n5- Fahrenheit a Kelvin.\n6- Kelvin a Fahrenheit.\n7- Volver al menu anterior.'
    );
    while (optionTemp != '7') {
        switch (optionTemp) {
            case '1':
                let tempCtoF = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempCtoF = tempCtoF * (9 / 5) + 32;
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempCtoF.toFixed(2)) +
                        ' grados Fahrenheit.'
                );
                break;
            case '2':
                let tempFtoC = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempFtoC = (tempFtoC - 32) * (5 / 9);
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempFtoC.toFixed(2)) +
                        ' grados Celsius.'
                );
                break;
            case '3':
                let tempCtoK = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempCtoK = tempCtoK + 273.15;
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempCtoK.toFixed(2)) +
                        ' grados Kelvin.'
                );
                break;
            case '4':
                let tempKtoC = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempKtoC = tempKtoC - 273.15;
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempKtoC.toFixed(2)) +
                        ' grados Celsius.'
                );
                break;
            case '5':
                let tempFtoK = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempFtoK = (tempFtoK - 32) * (5 / 9) + 273.15;
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempFtoK.toFixed(2)) +
                        ' grados Kelvin.'
                );
                break;
            case '6':
                let tempKtoF = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                tempKtoF = (tempKtoF - 273.15) * (9 / 5) + 32;
                alert(
                    'El valor es igual a ' +
                        parseFloat(tempKtoF.toFixed(2)) +
                        ' grados Fahrenheit.'
                );
                break;
            default:
                alert('Elija una opcion valida.');
                break;
        }
        optionTemp = prompt(
            'Elija la conversion a realizar:\n1- Celsius a Fahrenheit.\n2- Fahrenheit a Celsius.\n3- Celsius a Kelvin.\n4- Kelvin a Celsius.\n5- Fahrenheit a Kelvin.\n6- Kelvin a Fahrenheit.\n7- Volver al menu anterior.'
        );
    }
}

function velocidad() {
    let optionVel = prompt(
        'Elija la conversion a realizar:\n1- km/h a MPH.\n2- MPH a km/h.\n3- Volver al menu anterior.'
    );
    while (optionVel != '3') {
        switch (optionVel) {
            case '1':
                let velKMHtoMPH = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                velKMHtoMPH = velKMHtoMPH / 1.609;
                alert(
                    'El valor es igual a ' +
                        parseFloat(velKMHtoMPH.toFixed(2)) +
                        ' MPH'
                );
                break;
            case '2':
                let velMPHtoKMH = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                velMPHtoKMH = velMPHtoKMH * 1.609;
                alert(
                    'El valor es igual a ' +
                        parseFloat(velMPHtoKMH.toFixed(2)) +
                        ' km/h.'
                );
                break;
            default:
                alert('Elija una opcion valida.');
                break;
        }
        optionVel = prompt(
            'Elija la conversion a realizar:\n1- km/h a MPH.\n2- MPH a km/h.\n3- Volver al menu anterior.'
        );
    }
}

function peso() {
    let optionWeight = prompt(
        'Elija la conversion a realizar:\n1- Kilogramos a libras.\n2- Libras a kilogramos.\n3- Volver al menu anterior.'
    );
    while (optionWeight != '3') {
        switch (optionWeight) {
            case '1':
                let kgToLbs = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                kgToLbs = kgToLbs * 2.205;
                alert(
                    'El valor es igual a ' +
                        parseFloat(kgToLbs.toFixed(2)) +
                        ' libras.'
                );
                break;
            case '2':
                let lbsToKg = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                lbsToKg = lbsToKg / 2.205;
                alert(
                    'El valor es igual a ' +
                        parseFloat(lbsToKg.toFixed(2)) +
                        ' kilogramos.'
                );
                break;
            default:
                alert('Elija una opcion valida.');
                break;
        }
        optionWeight = prompt(
            'Elija la conversion a realizar:\n1- Kilogramos a libras.\n2- Libras a kilogramos.\n3- Volver al menu anterior.'
        );
    }
}

function distancia() {
    let optionDist = prompt(
        'Elija la conversion a realizar:\n1- Kilometros a millas.\n2- Millas a kilometros.\n3- Volver al menu anterior.'
    );
    while (optionDist != 3) {
        switch (optionDist) {
            case '1':
                let kmToMile = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                kmToMile = kmToMile / 1.609;
                alert(
                    'El valor es igual a ' +
                        parseFloat(kmToMile.toFixed(2)) +
                        ' millas.'
                );
                break;
            case '2':
                let mileToKm = parseFloat(
                    prompt('Ingrese el valor a convertir:')
                );
                mileToKm = mileToKm * 1.609;
                alert(
                    'El valor es igual a ' +
                        parseFloat(mileToKm.toFixed(2)) +
                        ' kilometros.'
                );
                break;
            default:
                alert('Elija una opcion valida.');
                break;
        }
        optionDist = prompt(
            'Elija la conversion a realizar:\n1- Kilometros a millas.\n2- Millas a kilometros.\n3- Volver al menu anterior.'
        );
    }
}

function unitConverter() {
    let optionMain = prompt(
        'Elija que tipo de unidades desea convertir: \n1- Temperatura.\n2- Velocidad.\n3- Peso.\n4- Distancia.\n5- Salir de la aplicacion.'
    );

    while (optionMain != '5') {
        switch (optionMain) {
            case '1':
                temperatura();
                break;
            case '2':
                velocidad();
                break;
            case '3':
                peso();
                break;
            case '4':
                distancia();
                break;
            default:
                alert('Elija una opcion valida.');
                break;
        }
        optionMain = prompt(
            'Elija que tipo de unidades desea convertir: \n1- Temperatura.\n2- Velocidad.\n3- Peso.\n4- Distancia.\n5- Salir de la aplicacion.'
        );
    }
}

unitConverter();

alert(saludos[1]);
