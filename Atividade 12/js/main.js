const log = console.log;


function hover() {
    win.setAttribute(`src`, `./img/window-open.png`);
}

function unhover() {
    win.setAttribute(`src`, `./img/window-closed.png`);
}
function shatter() {
    win.setAttribute(`src`, `./img/window-shattered.png`);
}