const lista = [
    100,
    200,
    300,
    400,
    500,
    600
];

const lista2 = [
    100,
    200,
    500,
    300,
    400,
];

function calcularMedia(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
        }
    )

    return sumaLista / lista.length;
}
// console.log(calcularMedia(lista));

function medianaLista(listaInicial) {
    let lista = listaInicial.sort();
    let mitadLista = parseInt(lista.length / 2);
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1]

    if (lista.length % 2 == 0) {
        return calcularMedia([elemento1, elemento2]);
    } else {
        return lista[mitadLista];
    }
}
