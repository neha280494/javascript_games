//returns selected option
let count=0;

function retInput(input)
{
  let choice;
   switch (input) {
  case "0":
    choice = "rock";
    break;
  case "1":
    choice ="paper";
    break;
 case "2":
    choice="scissors";
    break;
  default:
    choice=-1;
    break;  
   
}
return choice;
}

//returns random choice from computer
function getComputerChoice(){

    let num = Math.floor(Math.random()*3).toString();
    console.log("Computer choice :"+num);
    return retInput(num);
}


//returns Human choice selected by the user
function getHumanChoice()
{
   let input = prompt("enter 0 for rock. /nEnter 1 for Paper. /nEnter 2 for scissors");
    console.log("Human choice :"+input);
  return retInput(input.toString());
}
   




let humanScore =0;
let computerScore =0;

function playRound(humanChoice, computerChoice)
{
    console.log("In Playround - Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice);

    if(humanChoice=="rock" && computerChoice=="paper" )
    {
       console.log("You Lose! Paper beats rock");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU LOSE!!!!");
       computerScore++;
        document.getElementById('score-computer').value=computerScore;
    }
   else if(humanChoice=="paper" && computerChoice=="rock" )
    {
       console.log("You Win! Paper beats Rock");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       humanScore++;
       document.getElementById('score-user').value = humanScore;

    }
  else if(humanChoice=="rock" && computerChoice=="scissors" )
    {
       console.log("You Win! Rock beats scissors");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       humanScore++;
       document.getElementById('score-user').value = humanScore;
    }
  else if(humanChoice=="scissors" && computerChoice=="rock" )
    {
       console.log("You Lose! Rock beats scissors");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU LOSE!!!!");
       computerScore++;
        document.getElementById('score-computer').value=computerScore;
    }
   else if(humanChoice=="paper" && computerChoice=="scissors" )
    {
       console.log("You Lose! Scissors beats paper");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU LOSE!!!!");
       computerScore++;
        document.getElementById('score-computer').value=computerScore;
    }
   else if(humanChoice=="scissors" && computerChoice=="paper" )
    {
       console.log("You Win! Scissors beats paper");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       humanScore++;
       document.getElementById('score-user').value = humanScore;
    }
    else{
        console.log("ITS A TIE");
        alert("ITS A TIE");
    }


}
let flag=false;
function playGame(humanChoice,user)
{
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
   // document.getElementById('score-user').value = humanScore;
   // document.getElementById('score-computer').value=computerScore;
   // console.log("YOUR SCORE :"+humanScore);
   // console.log("COMPUTER SCORE :"+computerScore);
   
   if(humanScore==5 || computerScore==5)
   {
   
    if(humanScore==5)
    {
        document.getElementById('winner-id').value = user;
    }
    if(computerScore==5)
    {
      document.getElementById('winner-id').value = "Computer";
    
    }
    humanScore=0;
    computerScore=0;
    document.getElementById('score-user').value = 0;
    document.getElementById('score-computer').value=0;
   }
    
}

//let name="";
document.addEventListener('DOMContentLoaded', function() {
  // Select the buttons
   let name = prompt("Enter Your Name : ");
    //console.log("Human choice :"+input);
  const rockButton = document.querySelector('#btn-rock');
  const paperButton = document.querySelector('#btn-paper');
  const scissorsButton = document.querySelector('#btn-scissors');
// Select the button with the class 'rock'


// Add a click event listener to the Rock button
rockButton.addEventListener("click",function(e) {
  
  playGame("rock",name);
  

});



// Add a click event listener to the Rock button
paperButton.addEventListener("click",function(e) {
 
  playGame("paper",name);
   

});


scissorsButton.addEventListener("click",function(e) {
  
  playGame("scissors",name);
  
})

});

//playGame();



