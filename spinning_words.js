function spinWords(str) {
    //TODO Have fun :)
    const spinArr = str.split(" ")
    return spinArr.map(char => {
        if (char.length >= 5) { return char.split("").reverse().join("") }
        return char
    }).join(" ")
}