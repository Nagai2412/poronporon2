import { rpsValue } from './rpsSwitch.js';

randomValue = Math.floor(Math.random() * 3);

var _enemyValue;
var _rpsResult;

switch (randomValue) {
    case (0):
        _enemyValue = "rock";

    case (1):
        _enemyValue = "paper";

    case (2):
        _enemyValue = "scissors";
}

switch (true) {
    case (rpsValue == _enemyValue):
        _rpsResult = "tie";

    case ((rpsValue == "rock" &&  _enemyValue == "scissors") || (rpsValue == "paper" && _enemyValue == "rock") || (rpsValue == "scissors" && _enemyValue == "paper")):
        _rpsResult = "win";

    case ((rpsValue == "rock" &&  _enemyValue == "paper") || (rpsValue == "paper" && _enemyValue == "scissors") || (rpsValue == "scissors" && _enemyValue == "rock")):
        _rpsResult = "lose";
}

export var rpsResult = _rpsResult;