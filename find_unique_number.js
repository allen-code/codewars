function findUniq(arr) {
    // do magic
    arr.sort((a, b) => {
        return (a - b)
    })
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}
