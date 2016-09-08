var winners = [ [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] ,[0,4,8] , [2,4,6] ];
var p1 = [];
var p2 = [];
var used = [];
var turn = 0;
var win = 0;

$(document).ready(
  function init(){
  //receive button push
    $(document).on("click","#reset",function(){
      //clear squares
      var clearArray = $('td');
      $(clearArray).each(function(i){
        $(clearArray[i]).text('');
      });
      //empty p1
      p1 = [];
      //empty p2
      p2 = [];
      used = [];
      //set turn to 0
      turn = 0;
      win = 0;
      $('.playerTurn').text("It is X's turn");
      //launch setGamePieces();
      setGamePieces();
    });
  }
);

$(document).ready(

  function setGamePieces(){
  //when a square is clicked
  $(document).on("click",'td',function(){
      //depending on the player
    var choice = $(this).data("num");
    if (win === 1){
      if(turn % 2 === 0){
        playName = "Player X";
      } else {
        playName = "Player O";
      }
      $('.playerTurn').text(playName + " has won, push 'Clear Board' to start again");
    } else if(used.indexOf(choice)<0){
      if(turn % 2 === 0){
        $(this).text('x');
        p1.push(choice);
        used.push(choice);
      } else {
        $(this).text('o');
        p2.push(choice);
        used.push(choice);
      }
      winner();
    } else {
      alert('make another choice');
    }
  //display letter in square
  //add square clicked to player array .push()
  //launch winner()

  })}
);

function winner(){
  //for each winners[i]
  if(turn % 2 === 0){
    playArray = p1;
    playName = "Player X";
  } else {
    playArray = p2;
    playName = "Player O";
  };

  var counter = 0;

  for(i=0; i<=7; i++){
    if(playArray.indexOf(winners[i][0])>=0 && playArray.indexOf(winners[i][1])>=0 && playArray.indexOf(winners[i][2])>=0){
      alert(playName + ' has won');
      $('.playerTurn').text(playName + " has won, push 'Clear Board' to start again");
      win++;
      break;
    } else {
      counter++;
    }
  }

  if (counter === 8){
    switchTurn();
  }

  //check to see if numbers are for each array are contained in the player array
  //if counter reaches 3 stop and declare a winner
  //else launch switchTurn()
};

function switchTurn(){
  turn++;
  if(turn % 2 === 0){
    $('.playerTurn').text("It is X's turn");
  } else {
    $('.playerTurn').text("It is O's turn");
  }
  if(turn === 9) {
    $('.playerTurn').text("There has been no winner, push 'Clear Board' to start again");
  }
  //increase turn counter
  //change sentence at top of page
  //launch setGamePieces();
};