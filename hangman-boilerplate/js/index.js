/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */
let wordsOpt = [`halloween`, `scream`, `psycho`, `insidious`, `hereditary`]; // orden som kan väljas
let wordToGuess = wordsOpt[Math.floor(Math.random() * wordsOpt.length)] // slumpar ord från wordOpt
let wordArray = wordToGuess.split(''); //delar upp orden till indivdiella bokstäver
let hiddenWord = wordArray.map(x => '_'); // visar bokstäverna som _
let hiddenWord1 = hiddenWord.join(" ");
let wordArray1 = wordArray.join(" ");
let ggText = document.querySelector(`#ggtext`);
const gameOver = document.querySelector(`.gg`);
let wrongLetter = document.querySelector(`#wrongLetter`)
const bodyElem = document.querySelector('body');
const ul = document.querySelector('ul');
let wrongGuesses = 0;
gameOver.style.display = `none`;

ul.innerHTML = hiddenWord1;




console.log(wordArray);
console.log(hiddenWord);

bodyElem.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    let correctGuess = false;

    for (let i = 0; i < wordArray.length; i++) {
        if (keyPressed === wordArray[i]) {
            console.log('Rätt bokstav');
            correctGuess = true;
            hiddenWord[i] = keyPressed;
            console.log(hiddenWord);
        }
    }
    ul.innerHTML = ``;
    for (let i = 0; i < hiddenWord.length; i++) {
        let hiddenLetter = hiddenWord[i];
        let li = `<li>${hiddenLetter}</li>`;

        ul.insertAdjacentHTML('beforeend', li);
    }
    if (ul.innerText === wordToGuess) {
        gameOver.style.display = `flex`;
        ggText.innerText = `Du vann!`;
        return;
    }
    if (correctGuess === false) {
        console.log('Fel gissning');
        document.querySelector('figure').classList.add('scaffold');
        wrongGuesses++;
    }
    if (correctGuess === false && wrongGuesses === 2) {
        console.log('Fel gissning');
        document.querySelector('figure').classList.add('head')
        wrongGuesses++;
    }
    if (correctGuess === false && wrongGuesses === 4) {
        console.log('Fel gissning');
        document.querySelector('figure').classList.add('body')
        wrongGuesses++;
    }
    if (correctGuess === false && wrongGuesses === 6) {
        console.log('Fel gissning');
        document.querySelector('figure').classList.add('arms')
        wrongGuesses++;
    }
    if (wrongGuesses > 7) {
        console.log('Fel gissning');
        document.querySelector('figure').classList.add('legs')
        gameOver.style.display = `flex`;
        ggText.innerText = `Game Over`;
        ul.innerText = wordArray1;
    }

    wrongLetter.textContent += ` ` + event.key;

});