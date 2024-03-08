import { getAllUsers } from "../server-request.js";
import { fixSelectedPlayer } from "./fixSelectedPlayer.js";
import { createMatchHistoryTable } from "./createMatchHistoryTable.js";
import { hideSelectPlayerSection } from "./hideSelectPlayerSection.js";

export async function createSelectForPlayer () {

  const userArray = await getAllUsers();

  // const main = document.querySelector( "main" )

  const playerSelectSection = document.createElement( "section" );
  playerSelectSection.id = "selectUser";

  const playerSelect = document.createElement( "select" );
  playerSelect.name = "select1User";
  playerSelect.id = "select1User";

  const playerOption = document.createElement( "option" );
  playerOption.value = "0";
  playerOption.textContent = "Select player";
  playerSelect.appendChild( playerOption );

  const submitBtn = document.createElement( "button" );
  submitBtn.id = "fixName";
  submitBtn.textContent = "SUBMIT";

  playerSelectSection.appendChild( playerSelect );
  playerSelectSection.appendChild( submitBtn );

  const getDivElement = document.getElementById( 'matchHistory' );
  getDivElement.appendChild( playerSelectSection );
  
  // main.appendChild( playerSelectSection );

  userArray.forEach( ( user ) => {
    const option = document.createElement( "option" );
    option.value = user.id;
    option.text = user.name;
    playerSelect.appendChild( option );
  } );

  const fixPlayerName = document.getElementById( "fixName" );
  fixPlayerName.addEventListener( "click", () => {
    if ( playerSelect.selectedIndex === 0 ) {
      alert("You need to choose a player!")
    } else {
      fixSelectedPlayer();
      hideSelectPlayerSection();
      createMatchHistoryTable();
    }
  } )
};
