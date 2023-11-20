
const area = document.getElementById( 'area' );
const cell = document.getElementsByClassName( 'cell' );
const currentPlayer = document.getElementById( 'curPlyr' );

let player = "x";
let statTable = {
  'x': 0,
  'o': 0,
  'd': 0
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



for ( let i = 1; i <= 9; i++ ) {
  area.innerHTML += "<div class='cell' id=" + i + "></div>";
}

for ( let i = 0; i < cell.length; i++ ) {
  cell[ i ].addEventListener( 'click', cellClick, false );
}

function cellClick () {

  const data = [];

  if ( !this.innerHTML ) {
    this.innerHTML = player;
  } else {
    alert( "Cell is occupied" );
    return;
  }


  for ( let i in cell ) {
    if ( cell[ i ].innerHTML == player ) {
      data.push( parseInt( cell[ i ].getAttribute( 'id' ) ) );
    }
  }

  if ( checkWin( data ) ) {
    statTable[ player ] += 1;
    restart( "Has won: " + player );
  } else {
    let draw = true;
    for ( var i in cell ) {
      if ( cell[ i ].innerHTML == '' ) draw = false;
    }
    if ( draw ) {
      statTable.d += 1;
      restart( "Draw" );
    }
  }
  // if ( data.length > 3 ) {
  //   cell[ data[ 0 ] - 1 ].innerHTML = '';
  //   console.log( data );
  //   data.shift();
  //   console.log( data );
  //   alert( "4 steps!" )
  //   rounds += 1;
  //  }


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

function restart ( text ) {

  alert( text );
  for ( let i = 0; i < cell.length; i++ ) {
    cell[ i ].innerHTML = '';
  }
  updateStat();
}

function updateStat () {
  document.getElementById( 'sX' ).innerHTML = statTable.x;
  document.getElementById( 'sO' ).innerHTML = statTable.o;
  document.getElementById( 'sD' ).innerHTML = statTable.d;
  document.getElementById( 'sR' ).innerHTML = statTable.r;
}
