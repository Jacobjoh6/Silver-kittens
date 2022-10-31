/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */

addEventListener('keydown', (event) => {
    console.log(event.key);
});


const words = [`willow`, `buffy`, `xander`];

const randomWord = words[Math.floor(Math.random() * words.length)]
console.log(randomWord)


//else if (xxxx.length !==1) {
    //alert (`single letters only!);

