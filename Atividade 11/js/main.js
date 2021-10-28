const log = console.log;
var Accounts = [{}]

// ################ Buttons

function btnCalcArea() {
    x = parseInt(document.getElementById("in-base").value);
    y = parseInt(document.getElementById("in-height").value);
    out = ``;
    if (!(x >= 0)) {
        alert("Base is not a natural number");
        return;
    } else if (!(y >= 0)) {
        alert("Height is not a natural number");
        return;
    }
    // alert(`success!\nx:${x}\ny:${y}`)
    // log(Rectangles)

    let R = new Rectangle(x, y);
    let area = getArea(R);
    out += `Area of Rectangle(${R.b}, ${R.h}) is <div id="area">${area}</div>`;

    document.getElementById("answer1").innerHTML = out;
    return;
}

function btnRegister() {
    document.getElementById("answer2").innerHTML = register()

    return;
}

function register() {
    let name = document.getElementById("in-name").value;
    bank = parseInt(document.getElementById("in-bank").value);
    accNum = parseInt(document.getElementById("in-accNum").value);
    balance = parseInt(document.getElementById("in-balance").value);
    let out = `Please fill out the form<br>`;

    //  input validation
    if (!(name.length > 0) || !(bank > 0) || !(accNum > 0)) {
        return out;
    }
    if (document.getElementById("checking").checked) {
        accType = checking;
        // log(`set accType to checking`);
    } else if (document.getElementById("savings").checked) {
        accType = savings;
        // log(`set accType to savings`);
    } else {
        out += `Select account type<br>`;
        return out
    }


    let i;
    // instance checking acc
    if (accType == checking) {
        specialBal = parseInt(document.getElementById("in-specialBal").value);
        if (!(specialBal >= 0))
            out += `Special Balance Invalid<br>`
        else {
            A = new checking(name, bank, accNum, balance, specialBal);
            out = A.toHtml();
            i = Accounts.push(A);
        }
    }
    // instance savings acc
    else if (accType == savings) {
        fee = parseInt(document.getElementById("in-fee").value);
        dueDate = Date(document.getElementById("in-dueDate").value);

        if (!(fee >= 0)) {
            out += `Invalid Fee<br>`
        } else {
            A = new savings(name, bank, accNum, balance, fee, dueDate);
            out = A.toHtml();
            i = Accounts.push(A);
        }

    } else {
        alert("failed instancing")
        return out // only works if instancing fails
    }

    // return out
    // output handling
    out += `Account #${A._accNum} registered!<br>`
    out += ` Name: ${A._name} - Bank: ${A._bank} <br>`
    out += `Balance: ${A._balance}<br>`;
    if (accType = checking) {
        out += `Type: Checking<br>Special Balance: ${A._specialBalance}`
    } else if (accType = savings) {
        out += `Type: Savings<br>`
        out += `Fee:${A._fee} - Due Date: ${A._dueDate}<br>`;
    }
    return out
}

function list() {
    out = `No Accounts Registered<br>`
    if (Accounts.length > 1) {
        out = `${Accounts.length - 1} Accounts Registered<br>`
        Accounts.forEach(account => {
            if (account instanceof checking) {
                out += account.toHtml()
                out += `<br> ################ <br>`
            } else if (account instanceof savings) {
                out += account.toHtml()
                out += `<br> ################ <br>`
            }
        });
    }
    document.getElementById("answer2").innerHTML = out;
}

// ################ 1 - Object Rectangle and its area
function Rectangle(x, y) {
    this.b = x;
    this.h = y;
}
function getArea(R) {
    // log(`Base: ${ R.b }, Height: ${ R.h } should output ${ R.b * R.h } `);
    return parseInt(R.b * R.h);
}

// ################ 2 - Account Object
class account {
    constructor(name, bank, accNum, balance) {
        this._name = name;
        this._bank = bank;
        this._accNum = accNum;
        this._balance = balance;
    };
    getName() {
        return this._name
    }
    getBank() {
        return this._bank
    }
    getAccNum() {
        return this._accNum
    }
    getBalance() {
        return this._balance
    }
    setBalance(bal) {
        this._balance = bal;
    };

};

class checking extends account {
    constructor(name, bank, accNum, balance, specialBal) {
        super(name, bank, accNum, balance)
        this._specialBalance = specialBal;
    }
    setSpecialBalance(specialBal) {
        this._specialBalance = specialBal;
    }
    getSpecialBalance() {
        return this._specialBalance
    }

    toString() {
        return (
            `Account Type: Checking
Name: ${this.getName()}
Bank: ${this.getBank()}
Acc # ${this.getAccNum()}
Balance: ${this.getBalance()}
Special Balance: ${this.getSpecialBalance()}
        `
        )
    }

    toHtml() {
        return (
            `Account Type: Checking<br>
Name: ${this.getName()}<br>
Bank: ${this.getBank()}<br>
Acc # ${this.getAccNum()}<br>
Balance: ${this.getBalance()}<br>
Special Balance: ${this.getSpecialBalance()}
        `)
    }
}

class savings extends account {
    constructor(name, bank, accNum, balance, fee, dueDate) {
        super(name, bank, accNum, balance);
        this._fee = fee;
        this._dueDate = dueDate;
    }
    setFee(fee) {
        this._fee = fee;
    }
    setDueDate(dueDate) {
        this._dueDate = dueDate;
    }
    getFee() {
        return this._fee
    }
    getDueDate() {
        return this._dueDate
    }

    toString() {
        return (
            `Account Type: Savings
Name: ${this.getName()}
Bank: ${this.getBank()}
Acc # ${this.getAccNum()}
Balance: ${this.getBalance()}
Fee: ${this.getFee()}
Due Date: ${this.getDueDate()}
        `
        )
    }

    toHtml() {
        return (
            `Account Type: Savings<br>
Name: ${this.getName()}<br>
Bank: ${this.getBank()}<br>
Acc # ${this.getAccNum()}<br>
Balance: ${this.getBalance()}<br>
Fee: ${this.getFee()}<br>
Due Date: ${this.getDueDate()}
`
        )
    }
}

