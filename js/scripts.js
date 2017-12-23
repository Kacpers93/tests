function multiplay(a, b) {
    if(b > 0) {
        var result = 0;
        for (var i = 0; i < b; i++) {
            result += a;
        }
    } 
    else if(b < 0) {
        var result = 0;
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