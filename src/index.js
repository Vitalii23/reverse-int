module.exports = function reverse (n) {
    let arrayNumberText = String(n).split('').map((n) => {
        return String(n);
    });

    return Math.abs(Number(arrayNumberText.reverse().join().replace(/[,-]/gm,'')));
}
