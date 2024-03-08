import { updateMatchHistory } from "./updateMatchHistory.js";
import { createGameBoard } from "./createGameBoard.js"; 
import { createCurPly } from "./createCurPly.js";

export function startNewGame () {
  createCurPly();
  createGameBoard();
  const currentPlayer = document.getElementById( 'curPlyr' );
  const area = document.getElementById( 'area' );
  const cell = document.getElementsByClassName( 'cell' );

  for ( let i = 1; i <= 9; i++ ) {
    area.innerHTML += "<div class='cell' id=" + i + "></div>";
  }

  for ( let cellElement of cell ) {
    cellElement.addEventListener( 'click', cellClick, false );
  }

  let player = "x";
  let statTable = {
    'x': 0,
    'o': 0,
    'r': 0
  }
  let winIndex = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 3, 6, 9 ],
    [ 1, 5, 9 ],
    [ 3, 5, 7 ]
  ];
  let rounds = 0;
 

  function cellClick () {
    if ( !this.innerHTML ) {
      this.innerHTML = player;
    } else {
      alert( "Cell is occupied" );
      return;
    }
    const data = Array.from( cell ).filter( cellItem => cellItem.innerHTML === player )
      .map( cellItem => parseInt( cellItem.getAttribute( 'id' ) ) );

    if ( checkWin( data ) ) {
      rounds += 1;
      statTable[ player ] = "won";
      statTable[ player == 'x' ? 'o' : 'x' ] = 'lost';
      statTable.r = rounds;
      restart( player + " has won!" );
    }
    if ( data.length > 3 ) {
      newRound();
    }
    player = player == "x" ? "o" : "x";
      currentPlayer.innerHTML = player.toUpperCase();
      console.log( data );
    }

    function checkWin ( data ) {
      for ( let i in winIndex ) {
        let win = true;
        for ( let j in winIndex[ i ] ) {
          let id = winIndex[ i ][ j ];
          let ind = data.indexOf( id );

          if ( ind == -1 ) {
            win = false
          }
        }
        if ( win ) return true;
      }
      return false;
    }

    function newRound () {
      for ( let i = 0; i < cell.length; i++ ) {
        cell[ i ].innerHTML = '';
      }
      rounds += 1;
      statTable.r = rounds;
      document.getElementById( 'sR' ).innerHTML = statTable.r;
    }

    function restart ( text ) {
      alert( text );
      for ( let i = 0; i < cell.length; i++ ) {
        cell[ i ].innerHTML = '';
      }
      updateMatchHistory();
      updateTable();
      disableCellClick();
      createBtnPlayAgain();
      createBtnPlayNewGame();
      rounds = 0;
  }
  
  function resetStatTable (){
    statTable.x = 0;
    statTable.o = 0;
    statTable.r = 0;
    document.getElementById( 'sX' ).innerHTML = statTable.x;
  document.getElementById( 'sO' ).innerHTML = statTable.o;
  document.getElementById( 'sR' ).innerHTML = statTable.r;
  }

  function updateTable () {
      document.getElementById( 'sX' ).innerHTML = statTable.x;
      document.getElementById( 'sO' ).innerHTML = statTable.o;
      document.getElementById( 'sR' ).innerHTML = statTable.r;
  }
  
  function createBtnPlayNewGame () {
    const btnPlayNewGame = document.createElement( "button" );
    btnPlayNewGame.id = "btnPlayNewGame";
    btnPlayNewGame.textContent = "NEW GAME"
    document.body.appendChild( btnPlayNewGame );
  }

  function hideBtnPlayNewGame () {
    const btnPlayNewGame = document.getElementById( 'btnPlayNewGame' );
    // btnPlayAgain.style.visibility = 'hidden'; 
    btnPlayNewGame.style.display = 'none';
  }
  document.addEventListener( 'click', function ( event ) {
    if ( event.target && event.target.id === 'btnPlayNewGame' ) {
      hideBtnPlayNewGame();
      location.reload();
    }
  } );

  function createBtnPlayAgain () {
    const btnPlayAgain = document.createElement( "button" );
    btnPlayAgain.id = "btnPlayAgain";
    btnPlayAgain.textContent = "NEW MATCH"
    document.body.appendChild( btnPlayAgain );
    
    function hideBtnPlayAgain () {
      const btnPlayAgain = document.getElementById( 'btnPlayAgain' );
      // btnPlayAgain.style.visibility = 'hidden'; 
      btnPlayAgain.style.display = 'none';
    }
    document.addEventListener( 'click', function ( event ) {
      if ( event.target && event.target.id === 'btnPlayAgain' ) {
        hideBtnPlayAgain();
        hideBtnPlayNewGame();
        enableCellClick();
        resetStatTable();
      }
    } );
  }

  function disableCellClick () {
    for ( let cellElement of cell ) {
      cellElement.removeEventListener( 'click', cellClick, false );
    }
  }
  
   function enableCellClick () {
    console.log( "Funktionen click funkar!" );
    // const cell = document.getElementsByClassName( 'cell' );
    for ( let cellElement of cell ) {
      cellElement.addEventListener( 'click', cellClick, false );
    }
  }
  }


