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
var rollNumber = 0, pointValue = 0, loseValues = [2, 3, 12],
    diceOneValue, diceTwoValue, rollTotal;


function rollDiceButtonClicked() {
  generateDiceValues();
  displayDiceRoll();
  determineOutcomeOfRoll(rollNumber, rollTotal);
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


function determineOutcomeOfRoll(rollNumber, rollValue) {
  rollNumber += 1;
  // 1st roll: win, lose, or assign 'point'
  if (rollNumber === 1) {
    if (rollValue === 7 || rollValue === 11) { console.log('immediate win!'); }
    loseValues.forEach(function(loss) {
      if (rollValue === loss) { console.log('immediate loss!'); }
    });
    pointValue === rollValue;
  }

  // every other roll
  if (rollValue === pointValue || rollValue === 7) {
    console.log('win! -> ' + rollNumber + ' turns to score ' + rollValue);
  }
  loseValues.forEach(function(loss) {
    if (rollValue === loss) {
      console.log('loss! -> ' + rollNumber + ' turns to score ' + rollValue);
    }
  });
  console.log(rollNumber + ": " + rollValue);
}
