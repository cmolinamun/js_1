precio = 400000

precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
valorTotalSpan = document.querySelector(".valor-total");
incrementar = document.getElementById("incrementar");
decrementar = document.getElementById("decrementar");


precioSpan.innerHTML = precio

function actualizarTotal() {
    valorTotalSpan.innerHTML = precio * cantidadSpan.innerHTML
}

incrementar.onclick = function() {
    cantidadSpan.innerHTML = parseInt(cantidadSpan.innerHTML) + 1
    actualizarTotal()
}

decrementar.onclick = function() {
    cantidadSpan.innerHTML = parseInt(cantidadSpan.innerHTML) - 1
    actualizarTotal()
}

actualizarTotal()