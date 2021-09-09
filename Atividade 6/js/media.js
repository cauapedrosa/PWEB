// Input
var nome = prompt("Qual é o seu nome?");
var n1 = parseFloat(prompt("Digite a 1ª Nota"));
var n2 = parseFloat(prompt("Digite a 2ª Nota"));
var n3 = parseFloat(prompt("Digite a 3ª Nota"));
var avg, r;

// Average Function
function calcAvg(n1, n2, n3) {
    r = (n1 + n2 + n3) / 3;
    return parseFloat(r);
}

// Printing
avg = calcAvg(n1, n2, n3);
console.table("Values:", {n1, n2, n3, avg});
alert("O aluno " +nome+ " teve média " + avg);