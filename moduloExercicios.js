// Modulo de exercícios para executar no ./Aula4.js
import promptSync from "prompt-sync";
let prompt = promptSync();

// 1. Imprimir números de 1 a 10
export function print_1_10(){
    for (let indice = 1; indice <= 10; indice++){
        console.log(`Número ${indice}`)
    }    
}

// 2. Imprimir números pares de 1 a 10.
export function printPar_1_10(){
    for (let indice = 2; indice <= 10; indice+=2){
        console.log(`Número ${indice}`)
    }
}

// 3. Faça um programa que imprima os números ímpares de 0 a 50;
export function printImpar_0_50(){
    for (let indice = 1; indice <= 50; indice+=2){
        console.log(`Número ${indice}`)
    }
}

// 4. Tabuada aleatória de 0 a 10.
export function printTabuada_0_10(tabuada_){
    for (let indice = 0; indice <= 10; indice++){
        console.log(`${tabuada_} X ${indice} = ${indice * tabuada_}`)
    }
}

// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
export function printFibonacci_10(){
    let numero1  = 0
    let numero2 = 1
    let fibo;

    for (let indice = 1; indice <= 10; indice++){
        console.log(`${numero1}`)
        fibo=numero1+numero2
        numero2 = numero1
        numero1 = fibo
    }
}

// 6. Imprimir números pares de 0 a 20 utilizando o loop while
export function printParWhile_1_10(){
    let indice = 0;
    while (indice <= 20){
        console.log(`${indice}`)
        indice++
    }
}

// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
export function CalcSoma_1_100(){
    let indice = 1;
    let soma=0;
    while (indice <= 100){
        soma = soma+indice;
        indice++
        console.log(`${soma}`)
    }
}

// 8. receba a idade do usuário, enquanto < 18 anos continue até > 18.
export function confirmarIdade(){
    let idade=0;
    while (idade < 18){
        idade = parseInt(prompt('Qual a sua idade? '));
    }
    console.log(`Parabéns, você é maior de 18!!!!`)
}

// 9. receba um número do usuário e mostre a contagem regressiva até 0.
export function contRegressiva(){
    let NumeroUser = parseInt(prompt('Digite um Número e veja a contagem regressiva até 0: '));
    while (NumeroUser >= 0){
        console.log(`${NumeroUser}`)
        NumeroUser--
    }
}

// 10. Receba um número do usuário enquanto for diferente de 0.
export function facaAteDif0(){
    let NumeroUser;
    do
    {
        NumeroUser = parseInt(prompt('Digite um Número: '));
    }while (NumeroUser != 0)
    console.log(`Parabéns, Você saiu do LOOOP de 0!!!!`)
}
























