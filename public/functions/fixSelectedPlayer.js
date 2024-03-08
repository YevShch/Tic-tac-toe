export async function fixSelectedPlayer () {
  let playerName;
 
  const playerSelect = document.getElementById( "select1User" );
  const selectedOption = playerSelect.options[ playerSelect.selectedIndex ];
  console.log( selectedOption );
  playerName = selectedOption.text;
  console.log( playerName );
  const selectedUserId = playerSelect.value;
  console.log( "selectedUserId = " + selectedUserId );

};
