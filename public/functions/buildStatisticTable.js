export function buildStatisticTable(){
// Create the <div> element for statistics
const statDiv = document.createElement( "div" );
statDiv.className = "tableDiv";

// Create the <table> element
const tableElement = document.createElement( "table" );
 tableElement.className = "stat"; 

// Create the <th> element for the table header
const tableHeader = document.createElement( "th" );
tableHeader.setAttribute( "colspan", "3" );
tableHeader.textContent = "Statistics";

  // Create the rows and cells for player scores
const player1XCell = document.createElement( "td" );
player1XCell.id = "playerX";
player1XCell.textContent = "X";

const player1Row = document.createElement( "tr" );
const player1NameCell = document.createElement( "td" );
player1NameCell.id = "player1";
player1NameCell.textContent = "Player1";

const player1ScoreCell = document.createElement( "td" );
const player1ScoreSpan = document.createElement( "span" );
player1ScoreSpan.id = "sX";
player1ScoreSpan.textContent = "0";
  
player1ScoreCell.appendChild( player1ScoreSpan );
player1Row.appendChild( player1XCell );
player1Row.appendChild( player1NameCell );
player1Row.appendChild( player1ScoreCell );
  
const player2Row = document.createElement( "tr" );
const player2NameCell = document.createElement( "td" );
player2NameCell.id = "player2";
player2NameCell.textContent = "Player2";
 
const player2XCell = document.createElement( "td" );
player2XCell.id = "playerO";
player2XCell.textContent = "O";
  
const player2ScoreCell = document.createElement( "td" );
const player2ScoreSpan = document.createElement( "span" );
player2ScoreSpan.id = "sO";
player2ScoreSpan.textContent = "0";
  
player2ScoreCell.appendChild( player2ScoreSpan );
player2Row.appendChild( player2XCell );
player2Row.appendChild( player2NameCell );
player2Row.appendChild( player2ScoreCell );

// Create the row for rounds
const roundsRow = document.createElement( "tr" );
const roundsNameCell = document.createElement( "td" );
  roundsNameCell.textContent = "Rounds";
  roundsNameCell.setAttribute( "colspan", "2" );
  
const roundsScoreCell = document.createElement( "td" );
const roundsScoreSpan = document.createElement( "span" );
roundsScoreSpan.id = "sR";
  roundsScoreSpan.textContent = "0";
  
roundsScoreCell.appendChild( roundsScoreSpan );
roundsRow.appendChild( roundsNameCell );
roundsRow.appendChild( roundsScoreCell );

// Append all elements to the table
tableElement.appendChild( tableHeader );
tableElement.appendChild( player1Row );
tableElement.appendChild( player2Row );
tableElement.appendChild( roundsRow );

document.body.appendChild( tableElement )
// Append the table to the div
statDiv.appendChild( tableElement );

  // Append the div to the section
  document.body.appendChild( statDiv )

  const player1NameRow= document.querySelector( 'td[id="player1"]' );
  let player1Name;

  const selectedOption = player1Select.options[ player1Select.selectedIndex ];
  player1Name = selectedOption.text;
  player1NameRow.textContent = player1Name;

  const player2NameRow = document.querySelector( 'td[id="player2"]' );
  let player2Name;

  const selectedOption2 = player2Select.options[ player2Select.selectedIndex ];
  player2Name = selectedOption2.text;
  player2NameRow.textContent = player2Name;
};
