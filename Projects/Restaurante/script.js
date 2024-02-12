function pedido() {
    let prato = document.getElementById('txtprato').value
    let intolera = document.getElementById('txtinto').value
    let res = document.getElementById('res');

    if (prato == 'carne' && intolera != 'vegano') {
        res.innerHTML = `<p>Perfecto! Pedido correcto!</p>`
    } else if (prato == 'pasta' && intolera != 'gluten') {
        res.innerHTML = `<p>Perfecto! Pedido correcto!</p>`
    } else if (prato == 'risoto' && intolera != 'lactosa') {
        res.innerHTML = `<p>Perfecto! Pedido correcto!</p>`
    } else {
        res.innerHTML = `<p>Usted no puede comer es plato!</p>`
    }
}