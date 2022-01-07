//rest
//old code without rest

function getSum() {
    let newArray = Array.prototype.slice.call(arguments, 0);
    return newArray.reduce(function (res, item) {
        return res + item;
    })

}

//new code with rest
function getSums(a, b, c, ...args) {
    
    return args.reduce(function (res, item) {
        return res + item;
    })
}
console.log(getSums(13,32,23,4,4));

