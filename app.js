const getKeyboard = document.getElementById("qwerty");
const getPhrase = document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");


let missed = 0;
        
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


/* Pseudocode for checkLetter
    checkLetter(button)
        Create variable and store all the ul.li elements in this variable
        Create variable named match and give it initial value null
      Loop through all of the li elements
        If button text is equal to text in li element
         add class show to the li element
         and store the button text in match variable
    complete loop and return variable match */    


    
     
    function checkLetter(button) {  
       const ulLetter = document.querySelectorAll(".letter");     
         let match = 0; 
        for(let i = 0; i < ulLetter.length; i++ ){
        if (button.textContent === ulLetter[i].textContent) {
            ulLetter[i].classList.add("show");
            match = button.textContent;
        }
    }
    return match;
}

/* Pseudocode for event listener
    add click event listener to qwerty variable
    if click doesnt take place on the button or button already has class chosen
    add class chosen to button pressed
    call checkletter function and store the results in a variable

    if checkLetter function doesnt find a Letter 
    remove one of the heart image
    increment the missed counter

*/


 getKeyboard.addEventListener("click",(e) =>{
    let buttonPressed = event.target;
    if (buttonPressed.tagName === "BUTTON" || buttonPressed.className === "chosen") {

        buttonPressed.classList.add = "chosen";
        buttonPressed.disabled = true;

        let letterFound = checkLetter(buttonPressed);
        // console.log(letterFound);

        if (letterFound == false) {
            let heart = document.querySelectorAll("img");
            heart[missed].src = "images/lostHeart.png";
            missed++;
        }
    }     
}
);


/*Pseudocode checkWin function
    create variable and store li elements with class name "letter"
    create variable and storeli elements with class name "show"

  





*/















