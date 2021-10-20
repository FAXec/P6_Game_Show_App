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
    const randomNumber = Math.floor(Math.random() * arr.length);
    const selectPhrase = arr[randomNumber];
    return selectPhrase.split("");
    
 };

 const randomPhrase = getRandomPhraseAsArray(phrases)

 let character = 0;

 function addPhraseToDisplay(arr) {
        const ul = document.querySelector("ul")

            for (let i = 0; i < arr.length; i++){
              const li = document.createElement("li");
              li.textContent = arr[i];
              ul.appendChild(li);

       if(arr[i] !== " "){
            li.className = "letter";
          } 
          else {
            li.className = "space";
          }
     }     
 }

const randomDisplay = addPhraseToDisplay(randomPhrase);



function checkLetter(clicked) {
    const checkLetter = document.querySelectorAll("li");
    const match = 0; 
        for(let i = 0; i < li.length; i++ ){
        if (clicked.textContent === li.textContent) {
            li[i].className = "show";
            clicked.textContent = match;
        }
        return match;
    }
  
}















