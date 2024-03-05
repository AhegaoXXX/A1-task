const arr = [false,1,0,1,2,0,1,3,"a"];

function moveZeros(arr) {
    return arr.reduce((acc, el) => {
        if (el === 0) {
            acc.zeros.push(el);
        } else {
            acc.nonZeros.push(el);
        }
        return acc;
    }, { zeros: [], nonZeros: [] });
}

console.log(moveZeros(arr));
