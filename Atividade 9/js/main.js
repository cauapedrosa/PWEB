const log = console.log;

function btnClick() {
    n1 = parseInt(document.getElementById('n1').value);
    n2 = parseInt(document.getElementById('n2').value);
    n3 = parseInt(document.getElementById('n3').value);
    out = ``;

    log(`BtnClick(${n1},${n2},${n3})`);
    if (!(n1 > 0 && n2 > 0 && n3 > 0)) {
        out += `Invalid Input`;
        return;
    } else {
        // alert(`${n1}\n${n2}\n${n3}`);
        out += `The greatest: ${greatest(n1, n2, n3)}`;
        out += `<br>  Sorted: ${sorted(n1, n2, n3)}`
    }

    document.getElementById('output').innerHTML = out;
}

function greatest(a, b, c) {
    x = a;
    if (b > x) {
        x = b;
    }
    if (c > x) {
        x = c;
    }
    // log(`Greatest(${a}, ${b}, ${c})\nReturning x: ${x}`);
    return x;
}

function sorted() {
    // aux = [arguments[0], arguments[1], arguments[2]];
    // aux.sort();

    a = arguments[0];
    b = arguments[1];
    c = arguments[2];

    out = ``;
    if (a <= b && a <= c) {
        out += `${a},`
        if (b <= c) {
            out += `${b},${c}`
        } else {
            out += `${c},${b}`
        }
    } else if (b <= a && b <= c) {
        out += `${b},`
        if (a <= c) {
            out += `${a},${c}`
        } else {
            out += `${c},${a}`
        }
    } else if (c <= a && c <= b) {
        out += `${c},`
        if (a <= b) {
            out += `${a},${b}`
        } else {
            out += `${b},${a}`
        }
    }

    return out;



    return aux;
}
