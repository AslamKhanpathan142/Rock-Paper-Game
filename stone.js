let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let opttions = ["rock", "paper", "scissors"];
   const randIdx =  Math.floor(Math.random() * 3);
   return opttions[randIdx]
}

const drowGame = () => {
    msg.innerText = "game is Drow";
}
 const showWinner = (userWin) => {
    if(userWin)
    {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = "you are win";
    }
    else
    {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = "you are loss";
    }
 }
const playGame = (userchoice) => {
    const compChoice = genCompChoice();

    if(userchoice === compChoice){
        // Drow game
        drowGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock")
        {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;  // tornary operater
        }
        else if(userchoice === "paper")
        {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            // rock, paper
            userWin =   compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})