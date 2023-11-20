// const playerArray = [ 'Bosse', 'Karina', 'Kalle', 'John', 'Eva' ];

// const span = document.createElement( 'span' )
// span.setAttribute( 'text', 'id' );
// text.innerText = "Player " + id

// const form = document.createElement( 'form' );
// form.setAttribute( 'id', 'playerForm' );


// const select = document.createElement( 'select' );
// select.setAttribute( 'id', 'playerSelect' );
// select.setAttribute( 'name', 'player' );

// playerArray.forEach( player => {
//   const option = document.createElement( 'option' );
//   option.value = player.toLowerCase();
//   option.textContent = player;
//   select.appendChild( option );
// } );

// const submitBtn = document.createElement( 'input' );
// submitBtn.setAttribute( 'type', 'submit' );
// submitBtn.value = 'Confirm selection';

// form.appendChild( select );
// form.appendChild( submitBtn );

// document.body.appendChild( form );

// form.addEventListener( 'submit', function ( event ) {
//   event.preventDefault();
//   console.dir( select )
//   console.log( select.selectedIndex );
//   const selectedPlayer = select.options[ select.selectedIndex ].value;
//   alert( 'You have selected: ' + selectedPlayer );
// } );

 

const area = document.getElementById( 'area' );
const cell = document.getElementsByClassName( 'cell' );
const currentPlayer = document.getElementById( 'curPlyr' );

// const playerSelect = document.getElementById( 'playerSelect' );
// select.getAttributeById( 'id', 'player1' );
// select.getElementById( 'name', 'player1' );

// const playerArray = [ 'Bosse', 'Karina', 'Kalle', 'John', 'Eva' ];

// const submitBtn = document.getElementById( 'input' );
// submitBtn.getAttribute( 'type', 'submit' );
// submitBtn.value = 'Confirm';

// playersArray.forEach( player1 => {
//   const option = document.getElementById( 'option' );
//   option.value = player.toLowerCase();
//   option.textContent = player1;
//   select.appendChild( option );
// } );

// form.addEventListener( 'submit', function ( event ) {
//   event.preventDefault();
//   console.dir( select )
//   console.log( select.selectedIndex );
//   const selectedPlayer = select.options[ select.selectedIndex ].value;
//   alert( 'You have selected: ' + selectedPlayer );
// } );



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
  if ( data.length > 3 ) {
    cell[ data[ 0 ] - 1 ].innerHTML = '';
    console.log( data );
    data.shift();
    console.log( data );
    alert( "4 steps!" )
    rounds += 1;
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
