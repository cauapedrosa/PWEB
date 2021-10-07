const log = console.log;

// ################ 1 - Object Rectangle and its area
function Rectangle(x, y) {
    this.b = x;
    this.h = y;
}
function getArea(R) {
    // log(`Base: ${R.b}, Height: ${R.h} should output ${R.b * R.h}`);
    return parseInt(R.b * R.h);
}
let r1 = new Rectangle(10, 20);
// log(r1);
// log(getArea(r1));

alert(`########## 1 ##########\nRectangle\nBase: ${r1.b}\nHeight: ${r1.h}\nArea: ${getArea(r1)}`);

// ################ 2 - Account Object
class account {
    constructor(name, bank, accNum) {
        this._name = name;
        this._bank = bank;
        this._accNum = accNum;
        this._balance = 0;
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
    constructor(name, bank, accNum, specialBal) {
        super(name, bank, accNum)
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
}

class savings extends account {
    constructor(name, bank, accNum, fee, dueDate) {
        super(name, bank, accNum);
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
}

let acc1 = new checking("Joao", 1, 123, 200.0);
acc1.setSpecialBalance(200.0);
let acc2 = new savings("Ana", 2, 234, 50.0, "1/1/2010")
acc2.setDueDate

// log(acc1);
// log(acc2);
alert(`########## 2. ##########\n${acc1.toString()}------------------------------
${acc2.toString()}`)
