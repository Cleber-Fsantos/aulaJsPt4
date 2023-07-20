import promptSync from "prompt-sync";
let prompt = promptSync();
let resposta;
import { 
    print_1_10, 
    printPar_1_10,
    printImpar_0_50,
    printTabuada_0_10,
    printFibonacci_10,
    printParWhile_1_10,
    CalcSoma_1_100,
    confirmarIdade,
    contRegressiva,
    facaAteDif0
} from './moduloExercicios.js';

do{
    resposta = prompt("Digite o Número do exercicio que voce quer exibir, se quiser sair digite SAIR: ");
    switch(resposta){
        case '1': 
            print_1_10();
            break;
        case '2':
            printPar_1_10();
            break;
        case '3':
            printImpar_0_50();
            break;
        case '4':
            let tabuada  = parseInt(prompt('Digite qual a tabuada você deseja visualizar (0-10): '));
            printTabuada_0_10(tabuada);
            break;
        case '5':
            printFibonacci_10();
            break;
        case '6':
            printParWhile_1_10();
            break;
        case '7':
            CalcSoma_1_100();
            break;
        case '8':
            confirmarIdade();
            break;
        case '9':
            contRegressiva();
            break;
        case '10':
            facaAteDif0();
            break;
        case 'sair':
            console.log('\nObrigado por utilziador nosso gerador de exercícios :) Volte Sempre !!!');
            break;
    
        default:
            console.log('\nValor Digitado não corresponde a um exercicio');
            break;
        }
    
}while(resposta != 'sair')
