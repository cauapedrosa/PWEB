const log = console.log
var pesquisa = [];


function save() {
    // log("in save()")
    if (nullCheck() == 0) {
        // log(printForm());
        var P = {} // person
        P.idade = getIdade();
        P.sexo = getSexo();
        P.nota = getOpiniao();
        log(P);
        pesquisa.push(P);
    }
}

function calc() {
    list() //debug
    var ret = "Resultado dos Cálculos: "
    const count = pesquisa.length;
    let avgAge = 0;
    let sumAges = 0;
    let oldest = 0;
    let youngest = 999999; //sorry
    let amtO1 = 0;
    let amtO2 = 0;
    let amtO3 = 0;
    let amtO4 = 0;
    let amtS1 = 0;
    let amtS2 = 0;

    // contagens
    pesquisa.forEach(P => {
        sumAges += P.idade;
        if (P.idade > oldest) {
            oldest = P.idade;
        }
        if (P.idade < youngest) {
            youngest = P.idade;
        }
        switch (P.nota) {
            case 1:
                amtO1++;
                break;
            case 2:
                amtO2++;
                break;
            case 3:
                amtO3++;
                break;
            case 4:
                amtO4++;
                break;
        }

        switch (P.sexo) {
            case "Male":
                amtS1++;
                break;
            case "Female":
                amtS2++;
                break;
        }
    });

    // Cálculo da média das Idades
    avgAge = sumAges / count;

    // Cálculo da % de Opiniões Positivas
    var goodReviews = parseInt(((amtO3 + amtO4) / count) * 100)

    ret += "<br>Média das idades: " + avgAge;
    ret += "<br>Maior Idade: " + oldest;
    ret += "<br>Menor Idade: " + youngest;
    ret += "<br>Qtd de \"Péssimos\": " + amtO1;
    ret += "<br>Porcentagem de Ótimo/Bom: " + goodReviews + "%";
    ret += "<br>Quantidade de Homens:" + amtS1;
    ret += "<br>Quantidade de Mulheres" + amtS2;
    return ret;
}

function list() {
    log("Listing: " + pesquisa.length + " Items\n");
    pesquisa.forEach(P => {
        log(P);
    });
}

function printForm() {
    var funcLog = "In printForm()";

    var opiniao = getOpiniao();
    funcLog += "\nOpiniao: " + opiniao;

    var sexo = getSexo();
    funcLog += "\nSexo: " + sexo;

    var idade = getIdade();
    funcLog += "\nIdade: " + idade;

    return funcLog;
}

function getOpiniao() {
    var radios = document.getElementsByName('opiniao');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return i + 1;
        }
    }

    return null;
}

function getSexo() {
    var radios = document.getElementsByName("sexo");

    if (radios[0].checked) {
        return "Male";
    } else if (radios[1].checked) {
        return "Female";
    } else {
        return null;
    }

}

function getIdade() {
    var idade = document.getElementById("idade").value;
    if (idade > 0) {
        return parseInt(idade)
    } else {
        return null;
    }
}

function nullCheck() {
    var ret = "Favor informar o(s) seguinte(s) campo(s):";
    var flag = 0;
    if (getIdade() == null) {
        ret += "\nIdade";
        flag++;
    }
    if (getSexo() == null) {
        ret += "\nSexo";
        flag++;
    }
    if (getOpiniao() == null) {
        ret += "\nOpinião";
        flag++;
    }
    // 
    if (flag == 0) {
        return flag;
    } else {
        alert(ret)
        return flag;
    }

}

function updateResults() {
    let aux = calc();
    document.getElementById("answers").innerHTML = aux;
}