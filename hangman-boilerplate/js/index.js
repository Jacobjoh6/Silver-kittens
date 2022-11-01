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
let hiddenWord = wordArray.map(x => '_');


let answer = null;
console.log(wordArray);

addEventListener('keydown', (event) => {
    if (event.code === 'wordArray') {
        correctWord.innerText = `hej`
    } else {
        document.querySelector('figure').classList.add('scaffold')
    }
});

console.log(hiddenWord);