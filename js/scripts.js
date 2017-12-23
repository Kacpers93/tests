function multiplay(a, b) {
    var result = 0;
    if(b < 0 && a < 0) {
        for (var i = 0; i < (-b); i++) {
            result += (-a);
        }
    }
    if(b > 0) {
        for (var i = 0; i < b; i++) {
            result += a;
        }
    } 
    if(b < 0) {
        for (var i = 0; i < a; i++) {
            result += b;
        }
    }
    return result;
}


console.log(multiplay(6, 2));
console.log(multiplay(-6, 2));
console.log(multiplay(5, 2));
console.log(multiplay(6, -2));

console.log(multiplay(-5, -2));



/*
ROZWIĄZANIE MENTORA (do głąbszej analizy)
function multiply(a, b) {
    var aIsNegative = a < 0 && b > 0; 
    var bIsNegative = a > 0 && b < 0; 
    var isResultNegative = aIsNegative || bIsNegative;

    a = Math.abs(a);
    b = Math.abs(b);
    var result = 0;
    for (var i = 0; i < a; i++) {
        result += b;
    }

    return isResultNegative ? -result : result;
}

console.log(multiply(3, 7));
console.log(multiply(-3, 7));
console.log(multiply(3, -7));
console.log(multiply(-3, -7));
*/