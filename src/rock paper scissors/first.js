export const text_html = `<div id="head">
<h1 id="heading">Rock Paper Scissor</h1>
</div>
<main id="main_out">

<div id="main_in">
    <div id="choice">
        <div id="rock" class="choic">
            <img src="https://i.imgur.com/ATTqi3M.jpg" alt="rock">
        </div>
        <div id="paper" class="choic">
            <img src="https://i.imgur.com/UwBToA5.jpg" alt="Paper">
        </div>
        <div id="scissor" class="choic">
            <img src="https://i.imgur.com/IoMjEmX.jpg" alt="scissor">
        </div>
    </div>
    <div id="score">
        <div id="y_score" class="scoreb">
            <div id="y_num">0</div>
            <h3>You</h3>
        </div>
        <div id="c_score" class="scoreb">
            <div id="c_num">0</div>
            <h3>Computer</h3>
        </div>
    </div>
    <div>
        <h2 id="result1">Play Your Move</h2>
    </div>
    <button type="reset" id="reset">Reset</button>
</div>`;


export const text_css = `*{
    margin: 0px;
    padding: 0px;
}
#head {
    color: white;
    background-color: rgb(0, 0, 70);
    text-align: center;
    /* height: 10vh; */
    padding: 1rem;
}
#heading{
    font-size: 7vh ;
} 

#choice {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    margin: 8vh;
}

#choice div img{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    width: 20vh;
    height: 20vh;
    object-fit: cover;
}

#choice :hover{
    border: 5px solid darkblue;
    border-radius: 50%;
}

#score{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20vh;
    margin: 5vh;
    text-align: center;
}

#score .scoreb{
    font-size: 3vh;
    text-decoration: solid;
}

#result1 {
    font-size: 3vh;
    color: white;
    background-color: black;
    border-radius: 10px;
    width: fit-content;
    padding: 10px;
}

#main_out {
    display: flex;
    justify-content: center;
    align-items: center;
}

#main_in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body {
    background-color: antiquewhite;

}

#reset {
    background-color: black;
    color: aqua;
    margin: 5rem;
	padding: 0.7rem;
 	font-size: 2rem;
	text-decoration: solid;
	border-radius: 1rem;
    border: none;
}` ;


export const text_js = `let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choic");
var result = document.querySelector("#result");
var c_num = document.querySelector("#c_num");
var y_num = document.querySelector("#y_num");
var reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    result1.style.backgroundColor = "black";
    result1.innerText = "Play Your Move";
    compScore = 0;
    c_num.innerText = compScore;
    userScore = 0;
    y_num.innerText = userScore;
});


const genCompChoice = ()=>{
    const option = ["rock", "paper", "scissor"];
    var randInt = Math.floor(Math.random()*3);
    var compchoice = option[randInt]
    return compchoice;
}

const playGame = (userChoice)=>{
    var choice_out = genCompChoice();
    console.log(choice_out);

    if (userChoice === "rock" && choice_out === "scissor"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "scissor" && choice_out === "rock"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }

    else if (userChoice === "paper" && choice_out === "rock"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "rock" && choice_out === "paper"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }

    else if (userChoice === "scissor" && choice_out === "paper"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "paper" && choice_out === "scissor"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }
    else {
        result1.style.backgroundColor = "black";
        result1.innerText = "Its a draw";
    }
}
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice)
        playGame(userChoice);
    })
});`;