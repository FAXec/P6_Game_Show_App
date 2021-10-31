const getKeyboard = document.getElementById("qwerty");
const getPhrase = document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
let heart = document.querySelectorAll("img");



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


                /*Pseudocode for getRandomPhraseAsArray(arr)
  create a random number between 0 and arr.length
  use the random number as an index to select a string from arr
  convert the characters into lower case
  split the chosen string into an array
  return the array
*/

                //The function declaration chooses random phrases from phrases array
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const selectPhrase = arr[randomNumber].toLowerCase();
    return selectPhrase.split("");
    
 };

//  console.log(getRandomPhraseAsArray(phrases));

 const randomPhrase = getRandomPhraseAsArray(phrases)

/*
  create a addPhraseToDisplay function
  create a loop for each character
  create li item list
  add character to the list
  append list to ul 
  if condition
  character in array is letter and not space 
  function should add class "letter" to list item
  else "space"
  save value returned by getRandomPhraseAsArray to a variable 
  pass as an arguement to addPhraseToDisplay 
 */


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

        buttonPressed.classList.add("chosen");
        buttonPressed.disabled = true;

        let letterFound = checkLetter(buttonPressed);
        // console.log(letterFound);

        if (letterFound == false) {
            
            heart[missed].src = "images/lostHeart.png";
            missed++;
        }
    }     
}
);


/*Pseudocode checkWin function
    create variable and store li elements with class name "letter"
    create variable and store li elements with class name "show"
    if condition
    create win overlay and add class "win" to it
    change the headline text to "You Win"
    change display property to flex
    if condition for missed counter greater than 4
    create overlay by adding "lose" class
    change the headline text to lost
    change display property to overlay "flex"
*/

const winLetter = document.getElementsByClassName("letter");
//console.log(winLetter)
const winShow = document.querySelectorAll(".show");
//console.log(winShow);


function checkWin() {    
    if(winLetter.length === winShow.length){              
        overlay.classList.add("win");
        overlay.textContent = "Congratulations, you win";
        overlay.style.display = "flex";
    }else if (missed >= 5 && winLetter !== winShow) {
        overlay.classList.add("lose");
        overlay.textContent = "You lose, try again";
        overlay.style.display = "flex";        
    }
}












