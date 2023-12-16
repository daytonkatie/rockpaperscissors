//test

/** Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
 * We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!*/ 

function getComputerChoice() {
    // randomonly generate a number between 1 and 3
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

// assign each number to either rock, paper, or scissors
let computerChoice = "";
if (randomNumber===1){
    computerChoice="rock"
} else if (randomNumber===2) {
    computerChoice="paper"
} else {
    computerChoice="scissors"
}

    return computerChoice;
}

//test function
console.log(getComputerChoice());



/**Write a function that plays a single round of Rock Paper Scissors. 
 * The function should take two parameters - the playerSelection and computerSelection - 
 * and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Account for TIES by re-playing the round. */



function playRound(playerSelection, computerSelection) {
    //ask for the playerSelection. Use prompt() to get input from the user. 
    //change the playerSelection to lowercase
    //create series of if/then statements; first if will check for a TIE then return the same function?
    //display results of the round to the user
    //return 0 if the computer lost and 1 if the computer won;
  }

  //test function
   
 // const playerSelection = "rock";
 // const computerSelection = getComputerChoice();
//  console.log(playRound(playerSelection, computerSelection));


/**Important note: you want to return the results of this function call, not console.log() them. 
 * You’re going to use what you return later on, so let’s test this function by using console.log to see the results: */

/**Write a NEW function called game(). 
 * Use the previous function inside of this one to play a best-of-five game that keeps score and reports 
 * a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… 
if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Feel free to re-work your previous functions if you need to. 
Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful. */

// the game function would call the playRound function 5 times.
//each time the playRound function will display the result of the round.
//at the end, the function would sum the return values of each playRound function and if the value is greater than 2
//, report to the user that the computer has won the game and vis versa.

