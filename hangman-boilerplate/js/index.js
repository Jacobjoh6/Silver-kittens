/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */
let wordsOpt = [`hangman`, `silver`, `kittens`];
let correctWord = document.getElementById(`correctword`);
let wordToGuess = wordsOpt[Math.floor(Math.random() * wordsOpt.length)]
let wordArray = wordToGuess.split('');


let answer = null;
console.log(wordArray);


/*const hej = [{ bokstav1: `H`, bokstav2: `E`, bokstav3: `J` }]
addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        console.log(`hej`);
    } else {
        document.querySelector('figure').classList.add('scaffold')
    }
});
*/