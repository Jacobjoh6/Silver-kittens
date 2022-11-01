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


addEventListener('keydown', (event) => {
    if (event.code === `1`) {
        correctWord.innerText = `hej`
    } else {
        document.querySelector('figure').classList.add('scaffold')
    }
});

correctWord.innerHTML = hiddenWord;
console.log(wordArray);
console.log(hiddenWord);