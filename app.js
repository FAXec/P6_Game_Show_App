const getKeyboard = document.getElementById("qwerty");
const getPhrase = document.getElementById(phrase);
const startButton = document.getElementsByClassName(".btn__reset");

const missed = 0;
        
            //This event listener hides the overlay when user clicks start Game button
startButton.addEventListener("click", () => { 
        startButton.style.dislay = "none"});

            //Created an array of five phrases and labeled it as phrases 
let phrases = ["Quick and Dirty", 
                "Birds of a Feather Flock Together" ,
                "Wake Up Call" , 
                "Beating Around the Bush", 
                "When the Rubber Hits the Road"];

                //The function declaration chooses random phrases from phrases array
function getRandomPhraseAsArray(arr) {
    randomNumber = [Math.floor(Math.random() * phrases.length)];  // random number is enerated suing array length
    stringArr = phrases[randomNumber];  //select string from the array using the random number generated above
    arr = stringArr.split(", "); //Split the chosen phrase array into its own separate array separated by ,
    return arr;     
 };


 
const firstFunction = getRandomPhraseAsArray(); 

let character = 0;

function addPhraseToDisplay(firstFunction) {
        for (let i = 0; i < phrases.length; i++){
        let li = document.createElement("li");
        li.push(character);
        let ul = document.getElementsByTagName("ul");
        ul.appendchild("li");
       if (character == "arr" && !== " " ) {
        li[i].classList.add("letter");
       } else {
        li[i].classList.add("space");
       }
     
};
























// function checkLetter(buttonclick) {
//     const allLI = document.querySelectorAll("li");
//     let match = 0;
    
//     for( let i = 0; i < allLI.length; i++ ){
//         buttonclick = input.value
//         if(input.value === allLI ){ 
//             li.classList.add("show");
//         } else {
//             li.classList.add("match");
        
//     }

//     return match
// }

// const letter = checkLetter(buttonclick);

// getKeyboard.addEventListener("click", (e) =>{

//     if(){}


// }
// )