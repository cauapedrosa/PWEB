// Input
var n1 = parseFloat(prompt("Digite o 1º Número"));
var n2 = parseFloat(prompt("Digite o 2º Número"));

// Math
var sum = n1 + n2;
var sub = n1 - n2;
var prod = n1 * n2;
var div = n1 / n2;
var res = n1 % n2;

// Printing
console.table("Values:", {n1, n2, sum, sub, prod, div, res});
alert("Os numeros digitados foram " +n1+ " e " + n2 +
    "\nA Soma dos dois= " + sum +
    "\nA subtração do 1º pelo 2º= " + sub +
    "\nO produto= " + prod +
    "\nA divisão do 1º pelo 2º=" + div +
    "\nO resto da divisão do 1º pelo 2º= " + res);
