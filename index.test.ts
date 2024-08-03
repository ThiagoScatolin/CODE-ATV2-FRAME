import {test,expect} from "vitest"

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

function criaNovoVetor(vetor:number[],valor1:number,valor2:number){
    const resultado:number[] = []
    for (const item of vetor) {
      resultado.push(item);
    }
    resultado.push(valor1)
    resultado.push(valor2)
    return resultado
  }

//Fim do seu código

test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 4, 5)).toEqual([1, 2, 3, 4, 5])
    expect(vetor).toEqual([1, 2, 3])
})
test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 0, 0)).toEqual([1, 2, 3, 0, 0])
    expect(vetor).toEqual([1, 2, 3])
})

/**
 * Exercício 02 - Inverte a ordem dos caracteres de uma string
 * Nome da função - inverteString
 * Crie uma função que receba uma string e retorne essa string com os caracteres em ordem inversa.
 * @param {string} str A string que será invertida
 * @returns {string} Retorna a string com os caracteres em ordem inversa
 * @example
 * inverteString("hello") // "olleh"
 * inverteString("abcdef") // "fedcba"
 */ 

// Início do seu código
//OBS: não use as funções reverse e join
function inverteString(str) {

        let resultado = "";
        for (let i = str.length - 1; i >= 0; i--) {
            resultado += str[i];
        }
        return resultado;
    

}
// Fim do seu código

test('inverteString deve inverter a string corretamente', () => {
    expect(inverteString("hello")).toBe("olleh");
    expect(inverteString("abcdef")).toBe("fedcba");
    expect(inverteString("12345")).toBe("54321");
    expect(inverteString("!@#$%")).toBe("%$#@!");
});


/**
 * Exercício 03 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min:number, max:number){
    const resultado:number[] = []
    for (let i = min; i <= max; i++) {
      if(i%11==0){
        resultado.push(i)
      }
    }
    return resultado
  }

//Fim do seu código

test('divisivelPor11', () => {
    expect(divisivelPor11(1, 100)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99])
})
test("divisivelPor11 quando min =11 e max 110", () => {
    expect(divisivelPor11(11, 110)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 110])
})
test('divisivelPor11 quando valores trocados', () => {
    expect(divisivelPor11(100, 1)).toEqual([])
})

/**
 *  Exercício 04 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código

function maioresDeIdade(vetor:Pessoa[]){
    return vetor.filter(
      function (item:Pessoa){
        if(item.idade>=18){
          return true
        }
        else{
          return false
        }
      }
    )
  }

//Fim do seu código

test('maioresDeIdade: deve retornar os maiores de idade', () => {
    const pessoa1 = {id: 1, nome: 'João', idade: 20}
    const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
    expect(maioresDeIdade([pessoa1, pessoa2, {id: 3, nome: 'José', idade: 17}])).toEqual([pessoa1,{id: 2, nome: 'Maria', idade: 18}])
})
test('maioresDeIdade: deve retornar um array vazio quando não tiver maiores de idade', () => {
    expect(maioresDeIdade([{id: 3, nome: 'José', idade: 17}])).toEqual([])
})

/**
 * Exercício 05 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código

function resolveEquacao(vetor:number[]){
    const resultado:number[] = []
    for (const item of vetor) {
      resultado.push(item*item +2*item+6)
    }
    return resultado
  }

//Fim do seu código

test('resolveEquacao', () => {
    expect(resolveEquacao([1, 2, 3])).toEqual([9, 14, 21])
})
test('resolveEquacao quando números negativos', () => {
    expect(resolveEquacao([-1, -2, -3])).toEqual([5, 6, 9])
})

/**
 * Exercício 06 - Crie testes para a função helloWorld e explique o que é um teste.
 * Nome da função - helloWorld
 * @returns {string} Retorna Hello World! :D
 * @example
 * helloWorld() // Hello World
 */
function helloWorld(): string {
    return 'Hello World! :D'
}

//Início do seu código
test('Testando função helloWorld', () => {
    expect(helloWorld()).toEqual('Hello World! :D')
  })
//Fim do seu código
