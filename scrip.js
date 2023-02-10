//TEXT ADVENTURE GAME

// Text Adventure Game
const start = `Welcome to the Shrek Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You discover your swamp has been swamped by a whole bunch of fairytale creatures. Should you...
1. Invite them all in for tea and cake
OR
2. say "GET OUT OF MY SWAMP"
${enter}`;

const gameOver1 = `The creatures take over your house and swamp,so you have to resort to sleeping in the out house. ${gameOver}`;

const q2 =  ` Donkey the Donkey sticks around.you donkey set on a quest to find Lord Farquaad to get your swamp back . Should you...
1. Make a deal to rescue a princess in return.
OR
2. Slay Lord Farquaad and take his lord ship title.
${enter}`;

const gameOver2 = `The citizens rebel your slayed,and a century war between humans and fairy tail creatures begins. ${gameOver}`;

const q3 = ` You and Donkey arrive at the tower guarded by a fire-breathing dragon. Should you...
1. Turn around and say nope.
OR
2. You put on some armor of a dead knight and face the furious dragon.
${enter}`;

const gameOver3 = `You live homeless for the rest of your life,sleeping under bridges and become a troll.  ${gameOver}`;

const q4 = `The dragon occupies herself with Donkey. You go to wake Fiona up Should you...
1. Kiss to wake up 
OR
2. Violently shake her until she awakes.
${enter}`;

const gameOver4 = `She acclaims you has her one true love, reveling her big secret.What what about Lord Farquaad. ${gameOver}`;

const q5 = `You all make it out.YOu tells her that Lord Farquaad sent you, that he's the one who wants to marry her. she refuses to leave Should you...
1. Leave her in the dust
OR
2. You picks her up then they head back to Duloc
${enter}`;

const gameOver5 = ` Lord Farquaad's legs do not allow him to retrieve her.You never get your swamp back.${gameOver}`;

const win = `You complete your mission,but her secret(ogre curse) gets reviled and you fall in love and get married.Living together at your swamp`;



//Alerts the user to start the game
alert(start)


//Sets the value of user input to the users'entry 
let userInput = prompt(q1);


//Nested conditions statements
// NOTE: Prompts return the value entered in as a string.That is why double equals is instead of triple  equals(AKA strick equals)

//1ST IF STATEMENT
if (userInput == "2"){
    userInput = prompt(q2);

    //2ND IF STATEMENT 
    if(userInput == "1"){
        userInput = prompt(q3);

        //3RD IF STATEMENT
        if(userInput == "2"){
            userInput = prompt(q4);
            
            //4TH IF STATEMENT
            if(userInput == "2"){ 
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