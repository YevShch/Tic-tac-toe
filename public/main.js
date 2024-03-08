import { selectPlayers } from "./functions/selectPlayers.js";

const button = document.createElement( "button" );
button.id = "start";
button.textContent = "START";

document.body.appendChild( button );

const headGameName = document.createElement( 'h1' );
headGameName.id = "headGameName";
headGameName.textContent = "TIC TAC TOE";

 document.body.appendChild( headGameName );

function hideButton () {
  const startBtn = document.getElementById( 'start' );
  startBtn.style.visibility = 'hidden'; // or use startBtn.style.display = 'none';
}

function hideTicTacToe () {
  const headGameName = document.getElementById( 'headGameName' )
  headGameName.style.visibility = 'hidden';
}

const startBtn1 = document.getElementById( 'start' );
startBtn1.addEventListener( 'click', () => {
  hideButton();
  hideTicTacToe();
  selectPlayers();
} );

const animationElement = document.getElementById( "headGameName");

// Set a timer for animation
setTimeout( () => {
  animationElement.style.opacity = 1; // Появление
}, 1000 ); // After 1 second

setTimeout( () => {
  animationElement.style.opacity = 0; // Исчезание
}, 3000 ); // After 3 seconds
