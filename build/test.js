const arr = [1, 2].reduce((a, value) => {
    a.push(value);
    return a;
}, []);
console.log(arr);