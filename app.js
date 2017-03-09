/*
* first roll:
*   7 or 11   = pass     (instant winner)
*   2, 3, 12  = crap out (instant loser)
*   otherwise --> play game
*
* every other roll:
*   value of first roll = "point"
*   player wants to roll "point" value or 7
*
* ***
*
* to make this a non-betting game,
* we'll use a counter to see who
* can roll "point" or 7 in fewer turns
*/


// global variables
var rollNumber = 0, pointValue = 0,
    diceOneValue, diceTwoValue, rollTotal,
    playerOne, playerTwo;


function rollDiceButtonClicked() {
  rollNumber += 1;
  generateDiceValues();
  displayDiceRoll();

  if (rollNumber === 1) {
    if (rollTotal === 7 || rollTotal === 11) {
      console.log('win!');
      return true;
    }

    if (rollTotal === 2 || rollTotal === 3 || rollTotal === 12) {
      console.log('lose!');
      return false;
    }

    pointValue == rollTotal;
  }
  if (rollTotal === pointValue || rollTotal === 7) {
    console.log('winner!', rollNumber);
  }
}

function generateDiceValues() {
  diceOneValue = Math.floor(Math.random() * 6 + 1);
  diceTwoValue = Math.floor(Math.random() * 6 + 1);
  rollTotal = diceOneValue + diceTwoValue;
}

function displayDiceRoll() {
  document.getElementById('rollNumber').innerHTML = rollNumber;
  document.getElementById('dice1').innerHTML = diceOneValue;
  document.getElementById('dice2').innerHTML = diceTwoValue;
  document.getElementById('total').innerHTML = rollTotal;
}

