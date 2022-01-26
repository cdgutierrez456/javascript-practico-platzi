let ladoCuadrado = 5;
let perimetroCuadrado = ladoCuadrado * 4;
let areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group("Cuadrado");
console.log(`El perimetro del cuadrado es igual a ${perimetroCuadrado} y su area es igual a ${areaCuadrado} cuadrados`);
console.groupEnd();

let lado1Triangulo = 6;
let lado2Triangulo = 6;
let baseTriangulo = 4;
let alturaTriangulo = 5.5;

let perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.group("Triangulo")
console.log(`Los lados del triangulo miden ${lado1Triangulo}cm y su base mide ${baseTriangulo}cm`);
console.log(`El perimetro del triangulo es ${perimetroCuadrado}cm y su area es de ${areaTriangulo}cm`);
console.groupEnd()

let radioCirculo = 4;
let diametro = radioCirculo * 2;
let PI = Math.PI;
let perimetroCirculo = diametro * PI;
let areaCirculo = radioCirculo * radioCirculo * PI;

console.group("Circulo");
console.log(`El perimetro del circulo es igual a ${perimetroCirculo}cm y su area es igual a ${areaCirculo}cm`);
console.groupEnd();
