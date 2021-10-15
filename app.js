const getKeyboard = document.getElementById("qwerty");
const getPhrase = document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

const missed = 0;
        
            //This event listener hides the overlay when user clicks start Game button
startButton.addEventListener("click", () => { 
        overlay.style.display = "none"});

            //Created an array of five phrases and labeled it as phrases 
let phrases = ["Quick and Dirty", 
                "Birds of a Feather Flock Together" ,
                "Wake Up Call" , 
                "Beating Around the Bush", 
                "When the Rubber Hits the Road"];

                //The function declaration chooses random phrases from phrases array
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    const selectPhrase = arr[randomNumber];
    x = selectPhrase.split(",");
    console.log(x);
 };

 const randomPhrase = getRandomPhraseAsArray(phrases)

















