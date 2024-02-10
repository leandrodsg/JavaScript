//TEORIA DE ARRAY
let num = [5, 8, 4]
console.log(`Array original: ${num}`);
//para acrescentar valor ao array
num[3] = 6;
console.log(`Array depois de adicionar o valor 6: ${num}`);

//para acrescentar valor ao array sem saber qual indice
num.push(7);
console.log(`Adicionar valor 7 utilizando o push: ${num}`);

//para verificar quantos elementos no array
console.log(`Quantos elementos no array: ${num.length}`);

//colocar os elementos em ordem
console.log(`Ordenando os elementos do array: ${num.sort()}`);
console.log(`//=================================================`)
//==============================================================
//==============================================================
//==============================================================
console.log(` `)
let number = [5, 8, 2, 9, 3]
console.log(`Array original => ${number}`)
//Ordernar o array
number.sort()
console.log(`Array ordenado => ${number}`)
//Adicionar um valor ao final do array
num.push(1)
console.log(`Valor 1 adicionado ao Array => ${number}`)
console.log(`O primeir valor do vetor é ${number[0]}`)
console.log(`O vetor tem ${number.length} posicoes`)
number.sort()
console.log(`Array reordenado => ${number}`)
console.log(`O primeir valor do vetor é ${number[0]}`)
console.log(`//=================================================`)

//==============================================================
//==============================================================
//==============================================================
console.log(` `)
let valores = [8, 1, 7, 4, 2, 9]
console.log(`Array original => ${valores}`)
console.log(`Escrever cada valor do Array`)
for (i = 0; i < valores.length; i++) {
  console.log(`A posicao ${i} tem o valor ${valores[i]}`)
}
console.log(` `)
//Versao ECMA Script
console.log(`Utilizando for - ECMA Script`)
for (let pos in valores) {
  console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
console.log(` `)
console.log(`Localizar posicao do valor no Array`)
valores.sort()
console.log(`Array ordenado => ${valores}`)
//Localizar o valor no Array
let posicao = valores.indexOf(8)
console.log(`Valor 8 está na posicao ${posicao}`)
let posicao2 = valores.indexOf(3)
console.log(`Valor nao encontrado no Array retorna: ${posicao2}`)
