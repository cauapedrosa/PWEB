const log = console.log;

function load() {
    document.getElementById("btnOK").disabled = false // enable OK button

    var select = document.getElementById("courses")
    var text = select.options[select.selectedIndex].text

    document.getElementById("answer").innerHTML = `Deseja ver mais informações sobre ${text}?`;
}

function popup() {
    var select = document.getElementById("courses")
    var shortName = select.options[select.selectedIndex].value

    var URL = `http://www.fatecsorocaba.edu.br/curso_${shortName}.asp`
    var windowFeatures = "width=600,height=300, menubar=0, toolbar=0"

    window.open(URL, "popup", windowFeatures)
}