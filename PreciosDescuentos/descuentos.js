function calculoDescuento(precioInicial, descuento) {
    let valorDescuento = (precioInicial * descuento) / 100;
    return precioInicial - valorDescuento;
}

function calcularDescuento() {
    let precio = document.getElementById('precio');
    let descuento = document.getElementById('descuento');
    let valorPrecio = precio.value;
    let valorDescuento = descuento.value;
    let valorPagar = calculoDescuento(valorPrecio, valorDescuento);
    let resutlP = document.getElementById('resultPrice');

    resutlP.innerText = `El valor final a pagar va a ser de $${valorPagar}`;
}