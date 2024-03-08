import { getAllUsers } from "../server-request.js";
import { fixSelectedNames } from "./fixSelectedNames.js";
import { startNewGame } from "./gameLogik.js";

export async function selectPlayers () {

  const userArray = await getAllUsers();
 
const playerSelectSection = document.createElement("section");
playerSelectSection.id = "playerSelect";

const player1Select = document.createElement("select");
player1Select.name = "player1Select";
player1Select.id = "player1Select";

const player1Option = document.createElement("option");
player1Option.value = "0";
player1Option.textContent = "Player 1";
player1Select.appendChild(player1Option);

const player2Select = document.createElement("select");
player2Select.name = "player2Select";
player2Select.id = "player2Select";

const player2Option = document.createElement("option");
player2Option.value = "0";
player2Option.textContent = "Player 2";
player2Option.selected = true;
player2Option.disabled = true;
player2Select.appendChild(player2Option);

const selectButton = document.createElement("button");
selectButton.id = "fixNames";
selectButton.textContent = "SUBMIT";

playerSelectSection.appendChild(player1Select);
playerSelectSection.appendChild(player2Select);
playerSelectSection.appendChild(selectButton);

document.body.appendChild(playerSelectSection);

  userArray.forEach( ( user ) => {
    const option = document.createElement( "option" );
    option.value = user.id;
    option.text = user.name;
    player1Select.appendChild( option );
  } );
  
  userArray.forEach( ( user ) => {
    const option2 = document.createElement( "option" );
    option2.value = user.id;
    option2.text = user.name;
    player2Select.appendChild( option2 );
  } ); 

  function hideElements () {
    const player1Select = document.getElementById( 'player1Select' );
    const player2Select = document.getElementById( 'player2Select' );
    const selectButton = document.getElementById( 'fixNames' );

    // hide elements
    player1Select.style.visibility = 'hidden'; // player1Select.style.display = 'none';
    player2Select.style.visibility = 'hidden'; //  player2Select.style.display = 'none';
    selectButton.style.visibility = 'hidden'; // selectButton.style.display = 'none';
  }

  const fixNames = document.getElementById( "fixNames" );
  fixNames.addEventListener( "click", () => {
    if ( player1Select.selectedIndex === 0 || player2Select.selectedIndex === 0 ) {
      alert( "Select one more player!" );
    } else if ( player1Select.selectedIndex === player2Select.selectedIndex ) {
      alert( "Choose two different players!" );
    } else {   
    fixSelectedNames();
    startNewGame();
      hideElements();
    }
  } );
}
