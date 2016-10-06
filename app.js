function findSum(numArray){
    var sum = 0;
    numArray.forEach(function(element) {
        sum += element;
    }, this);
    return sum;
}
var obj = [
    23,
    34,
    56,
    2
]
var sum = findSum(obj);
console.log(sum);