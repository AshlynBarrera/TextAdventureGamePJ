//TEXT ADVENTURE GAME

// Text Adventure Game
const start = `Welcome to the Shrek Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `Should you...
1. 
OR
2. 
${enter}`;

const gameOver1 = ` ${gameOver}`;

const q2 = `
1. 
OR
2. 
${enter}`;

const gameOver2 = ` ${gameOver}`;

const q3 = ` Should you...
1.
OR
2. 
${enter}`;

const gameOver3 = ` ${gameOver}`;

const q4 = ` Should you...
1. 
OR
2. 
${enter}`;

const gameOver4 = `${gameOver}`;

const q5 = `Should you...
1. 
OR
2. 
${enter}`;

const gameOver5 = ` ${gameOver}`;

const win = ``;



//Alerts the user to start the game
alert(start)


//Sets the value of user input to the users'entry 
let userInput = prompt(q1);


//Nested conditions statements
// NOTE: Prompts return the value entered in as a string.That is why double equals is instead of triple  equals(AKA strick equals)

//1ST IF STATEMENT
if (userInput == "1"){
    userInput = prompt(q2);

    //2ND IF STATEMENT 
    if(userInput == "1"){
        userInput = prompt(q3);

        //3RD IF STATEMENT
        if(userInput == "2"){
            userInput = prompt(q4);
            
            //4TH IF STATEMENT
            if(userInput == "1"){ 
                userInput = prompt(q5)

                //5TH IF STATEMENT
                if(userInput == "2"){
                    alert(win)
                }else{
                    alert(gameOver5)
                }
            }else{
                alert(gameOver4)
            }
        }else{
            alert(gameOver3);
        }
    }else{
        alert(gameOver2);
    }
}else{
    alert(gameOver1);
}