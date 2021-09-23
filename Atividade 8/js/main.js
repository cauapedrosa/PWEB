var pesquisa = [];

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
        return "M";
    } else if (radios[1].checked) {
        return "F";
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

function btnSave() {
    let aux = ``;

    if (nullCheck() == 0) {
        var P = {};
        P.idade = getIdade();
        P.sexo = getSexo();
        P.nota = getOpiniao();

        aux = `Cadastro #${pesquisa.length + 1} Efetuado:<br>Idade:  ${P.idade}<br>Sexo:  ${P.sexo}<br>Opinião: ${P.nota}`;
        pesquisa.push(P);
        document.getElementById("answers").innerHTML = aux;
    }
}

function btnCalc() {
    var ret = "Resultado dos Cálculos: "
    const count = pesquisa.length;
    if (count == 0) {
        document.getElementById("answers").innerHTML = `Não há cadastros para calcular.`;
        return null;
    }

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
            case "M":
                amtS1++;
                break;
            case "F":
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
    document.getElementById("answers").innerHTML = ret;
}

function btnList() {
    let aux = "Lista de Registros:";
    var i = 0;
    if (pesquisa.length == 0) {
        document.getElementById("answers").innerHTML = `Não há cadastros para listar.`;
        return null;
    }

    pesquisa.forEach(P => {
        i++;
        aux += `<br>#${i} ------------------`;
        aux += `<br>Idade: ${P.idade}`;
        aux += `<br>Sexo: ${P.sexo}`;
        aux += `<br>Opinião: ${P.nota}`;
    });
    aux += `<br>----------------------`;
    aux += `<br>Contagem: ${i}`;

    document.getElementById("answers").innerHTML = aux;
}

function btnClear() {
    let aux = `Resultados aparecerão aqui<br>`;
    let n = pesquisa.length;  //number of cadastros in pesquisa
    // 
    if (n > 0) {
        aux += `${pesquisa.length} cadastro(s) encontrado(s).`;
    }
    document.getElementById("answers").innerHTML = aux;
}