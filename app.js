// write code here
function add() {
    let arr = [];
    let total = 0;
    while (true) {
        let input = prompt("บวกเลข");
        if (input === null || input.trim() === "" || isNaN(input)) break;
        let num = +input;
        arr.push(num);
    };
    for (let value of arr) {
        total += value;
    };
    return total;
}

alert(add());