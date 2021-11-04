const log = console.log;

function valid() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var comment = document.getElementById("comment").value
    var formValid = true;

    var out = `<br>`;

    //checks
    if (name.length < 10) {
        out += `Nome nao pode ter menos que 10 caracteres<br>`
        formValid = false
    }
    if (!email.includes("@")) {
        out += `E-Mail deve conter um @<br>`
        formValid = false
    }
    if (comment.length < 20) {
        out += `Comentario deve ter no mínimo 20 caracteres<br>`
        formValid = false
    }

    document.getElementById("answer").innerHTML = out
    return formValid;
}

function submit_form() {
    if (valid()) {
        var btns = document.getElementsByName("radioBtn")
        var btnSim = btns[0].checked
        var btnNao = btns[1].checked
        if (!btnSim && !btnNao) {
            alert("Por favor responda a Pesquisa")
            return false
        } else if (btnSim) {
            alert("Que bom que você voltou a visitar esta página!")
        } else if (btnNao) {
            alert("Volte sempre à esta página!")
        }
        document.forms['form14'].submit();
    }
}
