var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log('É verdadeiro');
} else {
  console.log('É falso');
}

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui Graduação e Doutorado');
}   else if (possuiGraduacao) {
  console.log('Possui Graduação, mas não possui Doutorado');
}   else {
  console.log('Não possui Graduação');
}

if((5 + 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional = (5 - 5) || (5 + 5) || (10 - 2);
if (condicional) {
    console.log(condicional);
}
