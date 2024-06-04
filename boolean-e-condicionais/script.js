var idadeMarcio = 42;
var idadeMaria = 32;

if (idadeMarcio > idadeMaria) {
  console.log("Marcio é mais velho que Maria");
} else if (idadeMarcio === idadeMaria) {
  console.log("Marcio tem a mesma idade que Maria");
} else {
  console.log("Maria é mais velha que Marcio");
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //3

var nome = 'Andre';
if (nome) {
    console.log("Verdadeiro");
}   else {
    console.log("Falso");
} //Verdadeiro
var idade = 28;
if (idade) {
    console.log("Verdadeiro");
}   else {
    console.log("Falso");
} //Verdadeiro
var possuiDoutorado = false;
if (possuiDoutorado) {
    console.log("Verdadeiro");
}   else {
    console.log("Falso");
} //Falso
var empregoFuturo;
if (empregoFuturo) {
    console.log("Verdadeiro");
}   else {  
    console.log("Falso");
} //Falso
var dinheiroNaConta = 0;
if (dinheiroNaConta) {
    console.log("Verdadeiro");
}   else {  
    console.log("Falso");
} //Falso

var habitantesBrasil = 207;
var habitantesChina = 1400;
if (habitantesBrasil > habitantesChina) {
    console.log("Brasil tem mais habitantes que a China");
}   else {
    console.log("Brasil tem menos habitantes que a China");
} //Brasil tem menos habitantes que a China

if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
    } else {
    console.log('Falso');
    } //Falso

if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
    } else {
    console.log('Falso');
    } //Cão