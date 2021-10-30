const log = console.log;

function hover() {
    win.setAttribute(`src`, `./img/window-open.png`);
    document.getElementById('sfx-open').play();
    document.getElementById('topbar').innerHTML = `<h1>Atividade 12</h1><br>`
}

function unhover() {
    win.setAttribute(`src`, `./img/window-closed.png`);
    document.getElementById('sfx-close').play();
}
