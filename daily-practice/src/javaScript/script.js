const textDisplay = document.querySelector("#text");
const phrases = ['Hello,i am ripan', 'i am a coder', 'i love to showcase my skill'];
let i = 0;
let j = 0;

function loop() {
    if (i < phrases.length) {
        document.write(phrases[i])
        if (j < phrases[i].length) {
            document.write(` ${phrases[i][j]} <br>`)
            j++
        }
        if (j == phrases[i].length) {
            i++
        }
    }
    // setTimeout(loop, 500)
}

loop()