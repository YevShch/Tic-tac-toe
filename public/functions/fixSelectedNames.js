import { buildStatisticTable } from "./buildStatisticTable.js";
  
export async function fixSelectedNames () {
  let player1Name; 
  let player2Name;

  const player1Select = document.getElementById( "player1Select" );
  const selectedOption = player1Select.options[ player1Select.selectedIndex ];
  console.log( selectedOption );
  player1Name = selectedOption.text;
  console.log( player1Name );
  const selectedUserId = player1Select.value;
  console.log( "selectedUserId = " + selectedUserId );


  const player2Select = document.getElementById( "player2Select" );
  const selectedOption2 = player2Select.options[ player2Select.selectedIndex ];
  console.log( selectedOption, selectedOption2 );
  player2Name = selectedOption2.text;

  buildStatisticTable();
};
