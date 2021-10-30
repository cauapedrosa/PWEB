const log = console.log;

function run() {
    var box1 = document.getElementById("chk1").checked
    var box2 = document.getElementById("chk2").checked
    var txt = document.getElementById("txt")
    // log(txt.value)

    if (box1 && !box2) {
        aux = txt.value;
        txt.value = aux.toUpperCase();
        // log("IF1");
    }
    else if (!box1 && box2) {
        aux = txt.value;
        txt.value = aux.toLowerCase();
        // log("IF2");
    }
}
