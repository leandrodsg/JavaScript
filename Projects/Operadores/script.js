
function calcular() {
    let num1 = parseFloat(document.getElementById('txtnum1').value);
    let num2 = parseFloat(document.getElementById('txtnum2').value);
    let operador = document.getElementById('txtoperador').value;
    let res = document.getElementById('res');

    if (isNaN(num1) || isNaN(num2)) {
        res.innerHTML = "Por favor, insira números válidos.";
    } else {
        let resultado;

        // Verifica se o operador é igual a somar, subtrair, multiplicar ou dividir
        switch (operador) {
            case 'somar':
                resultado = num1 + num2;
                break;
            case 'subtrair': 
                resultado = num1 - num2;
                break;
            case 'multiplicar': 
                resultado = num1 * num2;
                break;
            case 'dividir':
                // Verifica se o segundo número é zero para evitar divisão por zero
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    res.innerHTML = "Erro: Divisão por zero.";
                    return;
                }
                break;
            default:
                res.innerHTML = "Operador inválido.";
                return;
        }

        // Exibe o resultado na div 'res'
        res.innerHTML = `O resultado é: ${resultado}`;
    }
}
