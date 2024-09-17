function Draw(array) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    array.forEach(element => {
        // y-axis is inversed, x-axis * 20 for better observability
        ctx.lineTo(100 + (element[0] * 20), 100 - element[1]);
        ctx.stroke();
    })
}
exports.Draw = Draw;

function getWordsArray(text) {
    // \b - word boundary(in this case start)
    // \w+ - word, 1 or more(works while character can be word)
    // \b - word boundary(in this case end)
    // g - global
    return text.match(/\b\w+\b/g);
}
exports.getWordsArray = getWordsArray;