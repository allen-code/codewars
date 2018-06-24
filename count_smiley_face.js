function countSmileys(arr) {
    const eyes = [':', ';'];
    const nose = ['-', '~'];
    const mouth = [')', 'D'];
    let count = 0;

    arr.map((smiley) => {
        if (smiley.length == 2 && eyes.indexOf(smiley.charAt(0)) != -1 && mouth.indexOf(smiley.charAt(1)) != -1) {
            count++;
        }
        else if (smiley.length == 3 && eyes.indexOf(smiley.charAt(0)) != -1 && nose.indexOf(smiley.charAt(1)) != -1 && mouth.indexOf(smiley.charAt(2)) != -1) {
            count++;
        }
    });

    return count;
}