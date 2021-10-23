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
    const checkLetter = document.querySelectorAll("ul.children");
        let match = 0; 
        for(let i = 0; i < checkLetter.length; i++ ){
        if (clicked === checkLetter[i].textContent) {
            checkLetter[i].classList.add("show");
            match = clicked.textContent;
        }
        return match;
    }
  
}


const heart = document.querySelectorAll(".tries");
 
 getKeyboard.addEventListener("click",(e) =>{
        if (getKeyboard !== click || getKeyboard.className === "chosen") {
                getKeyboard.classList.add("chosen");
                const checkClicked = checkLetter(clicked);
                for (let i = 0; i < heart.length; i ++) {
                    if (checkClicked !== randomPhrase ) {
                        heart[i].remove();                        
                    } 
           
                }
              
        } 
});















