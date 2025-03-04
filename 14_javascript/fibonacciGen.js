function fibonacciGenerator (n) {
    if(n === 1 || n === 0) {
        return ans = [0];
    }
    var first = 0;
    var second = 1;
    var ans = [];
    ans.push(first);
    ans.push(second);
    for(var i = 0; i < n - 2; i++) {
        var tmp = first + second;
        ans.push(tmp);
        first = second;
        second = tmp;
    }
    return ans;
}

console.log(fibonacciGenerator(2));
