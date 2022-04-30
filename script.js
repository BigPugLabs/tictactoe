//make all boxes clickable
//player 1 and 2

// init eventlisteners
// 




//document.querySelectorAll('div div').addEventListener('click', run)



//class constructor
class Game {
  constructor() {
    //current player      
    //keep track of board state

    this.currentTurn = 1 // player1 vs player2, "O" vs "X",
    this.boardState = [["", "", ""], ["", "", ""], ["", "", ""]]
  }

  register() {
    // ** CALL ME AFTER CONSTRUCTION **
    // see https://developer.mozilla.org/en-US/docs/web/api/eventtarget/addeventlistener#other_notes

    const that = this
    document.querySelector('#one').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#two').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#three').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#four').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#five').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#six').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#seven').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#eight').addEventListener('click', function (e) { that.run(e) })
    document.querySelector('#nine').addEventListener('click', function (e) { that.run(e) })
  }

  placeXO() {
    // everytime something is clicked a few things need to happen
    // switching between players/turns
    // needs to place either an X or O
    // need to have a variable that keeps track if an X or O is next
    // check if a player has won
    // after the game has been won, have a way to restart the game
  }

  getBoardState() {
    console.log(this.boardState)
    //console.log("getBoardState", this)
    return this.boardState
  }



  run(click) {
    //console.log("clickedthis", this)
    //this.updateBoard()
    if (this.currentTurn === 1) {
      this.currentTurn = 0
      console.log(this.currentTurn)
      click.target.innerText = "X"
    } else {
      this.currentTurn = 1
      console.log(this.currentTurn)
      click.target.innerText = "O"
    }
    // console.log("this", this)
    //console.log(this.boardState)
    switch (click.target.id) {
      case "one":
        // this.boardState[0][0] = "Hello"
        //console.log(this.boardState[0][0])
        break;
      case "two":
        //do something
        break
      case "three":
        //do something
        break
      case "four":
        //do something
        break
      case "five":
        //do something
        break
      case "six":
        //do something
        break
      case "seven":
        //do something
        break
      case "eight":
        //do something
        break
      case "nine":
        //do something
        break
    }

  }
}

//create game object
const currentGame = new Game()
currentGame.register()
//currentGame.getBoardState()