const log = console.log;

function load() {
    document.getElementById("btnOK").disabled = false // enable OK button

    var select = document.getElementById("courses")
    var text = select.options[select.selectedIndex].text
    log(text)

    document.getElementById("answer").innerHTML = `Deseja ver mais informações sobre ${text}?`;
}

function open() {
    var select = document.getElementById("courses")
    var shortName = select.options[select.selectedIndex].value

    var URL = `http://www.fatecsorocaba.edu.br/curso_${shortName}.asp`

    window.open(URL, "_blank", "width=600, height=300");
}