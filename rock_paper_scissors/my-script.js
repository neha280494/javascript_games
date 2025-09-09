//returns selected option
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
       humanScore++;
    }
   else if(humanChoice=="paper" && computerChoice=="rock" )
    {
       console.log("You Win! Paper beats Rock");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       computerScore++;
    }
  else if(humanChoice=="rock" && computerChoice=="scissors" )
    {
       console.log("You Win! Rock beats scissors");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       humanScore++;
    }
  else if(humanChoice=="scissors" && computerChoice=="rock" )
    {
       console.log("You Lose! Rock beats scissors");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU LOSE!!!!");
       computerScore++;
    }
   else if(humanChoice=="paper" && computerChoice=="scissors" )
    {
       console.log("You Lose! Scissors beats paper");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU LOSE!!!!");
       computerScore++;
    }
   else if(humanChoice=="scissors" && computerChoice=="paper" )
    {
       console.log("You Win! Scissors beats paper");
       alert("Human Choice :"+humanChoice+ " Computer Choice : "+ computerChoice+ " YOU WIN!!!!");
       humanScore++;
    }
    else{
        console.log("ITS A TIE");
        alert("ITS A TIE");
    }


}

function playGame()
{
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log("YOUR SCORE :"+humanScore);
    console.log("COMPUTER SCORE :"+computerScore);
    if(humanScore> computerScore)
    {
        console.log("YOU WIN");
    }
    else if(computerScore> humanScore) {
        console.log("COMPUTER WIN");

    }
    else{
        console.log("ITS A TIE");
    }
}

playGame();



