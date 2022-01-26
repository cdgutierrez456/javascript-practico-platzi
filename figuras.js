
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

// Interactuando con html

function calcularPerimetroCuadrado() {
    let input = document.getElementById('ladoCuadrado');
    let value = input.value;
    let perimetro = perimetroCuadrado(value);
    alert(`El valor del perimetro del cuadrado es igual a ${perimetro}cm`)
}

function calcularAreaCuadrado() {
    let input = document.getElementById('ladoCuadrado');
    let value = input.value;
    let area = areaCuadrado(value);
    alert(`El valor del Area del cuadrado es igual a ${area}cm`)
}
