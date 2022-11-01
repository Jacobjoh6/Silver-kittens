/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */
let wordsOpt = [`hangman`]; // orden som kan väljas
let correctWord = document.getElementById(`correctword`); //h1 i html där ordet ska synas
let wordToGuess = wordsOpt[Math.floor(Math.random() * wordsOpt.length)] // slumpar ord från wordOpt
let wordArray = wordToGuess.split(''); //delar upp orden till indivdiella bokstäver
let hiddenWord = wordArray.map(x => '_'); // visar bokstäverna som _
let hiddenWord1 = hiddenWord.join(" ");
let ggText = document.querySelector(`#ggtext`);
const gameOver = document.querySelector(`.gg`);
const main = document.querySelector(`main`);
let wrongGuesses = 0;
let wrongLetter = document.querySelector(`#wrongLetter`)
    //let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
gameOver.style.display = `none`;

addEventListener('keydown', (event) => {
    for (let i = 0; i < wordsOpt.length; i++) {
        wordsOpt[i] == event.key
        if (event.code === wordsOpt[i]) {
            correctWord.innerText = wordToGuess;
        } else if (wrongGuesses === 0) {
            document.querySelector('figure').classList.add('scaffold');
            wrongGuesses++
            console.log(wrongGuesses)
        } else if (wrongGuesses === 1) {
            document.querySelector('figure').classList.add('head')
            wrongGuesses++
            console.log(wrongGuesses)
        } else if (wrongGuesses === 2) {
            document.querySelector('figure').classList.add('body')
            wrongGuesses++
            console.log(wrongGuesses)
        } else if (wrongGuesses === 3) {
            document.querySelector('figure').classList.add('arms')
            wrongGuesses++
            console.log(wrongGuesses)
        } else if (wrongGuesses === 4) {
            document.querySelector('figure').classList.add('legs')
            gameOver.style.display = `block`;
            ggText.innerText = `Game Over`;
            console.log(wrongGuesses);
        } else {

        }
    }
    wrongLetter.textContent += ` ` + event.key
    console.log(event.key)
});




console.log(wrongGuesses)


correctWord.innerHTML = hiddenWord1;
console.log(wordArray);
console.log(hiddenWord);