const fib = parseInt(prompt('Enter your number'));

function fibonachi(fib) {
    let a = 1, b = 1;
    for (let i = 3; i <= fib; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const result = fibonachi(fib);
alert(result);






