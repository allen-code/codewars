const binaryArrayToNumber = arr => {
    // your code
    const len = arr.length
    return arr.reduce((sum, current, i) => {
        return sum + current * Math.pow(2, len - i - 1)
    }, 0)
};



// interesting answers from other devs:
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);