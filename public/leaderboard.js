import { getAllUsers, addUser, getOneUser, updateUser } from "./server-request.js"

let user = {
  "id": "",
  "name": "",
  "matchHistory": []
};
const userArray = await getAllUsers();
// console.log( userArray )

const main = document.getElementById( 'main' );

const headLine = document.createElement( "h1" );
headLine.id = "titelLead";
headLine.innerText = "LEADERBOARD";

// Create table elements
const table = document.createElement( "table" );
table.setAttribute( "class", "leaderboard" );
const thead = document.createElement( "thead" );
const tbody = document.createElement( "tbody" );
const trHead = document.createElement( "tr" );
const thName = document.createElement( "th" );
const thWins = document.createElement( "th" );
const thMatchs = document.createElement( "th" );
const thLosses = document.createElement( "th" );
const thScore = document.createElement( "th" );

// Stoppa in text i table head columns
thName.innerText = "Player Name";
thWins.innerText = "Wins";
thMatchs.innerText = "Matches";
thLosses.innerText = "Losses";
thScore.innerText = "Score, % of wins";

// Bygger ihopa min table
trHead.appendChild( thName );
trHead.appendChild( thWins );
trHead.appendChild( thLosses );
trHead.appendChild( thMatchs );
trHead.appendChild( thScore );
thead.appendChild( trHead )
table.appendChild( thead )
table.appendChild( tbody )

userArray.sort( ( a, b ) => b.matchHistory.filter( match => match.result === "won" ).length - a.matchHistory.filter( match => match.result === "won" ).length );

for ( let user of userArray ) {
  // Skapa alla table element för varje spelar rad 
  const playerRow = document.createElement( "tr" )
  const playerName = document.createElement( "td" )
  const playerWins = document.createElement( "td" )
  const playerLosses = document.createElement( "td" )
  const playerMatchs = document.createElement( "td" )
  const playerScore = document.createElement( "td" )

  // Add a text to each players rows kolumn 
  playerName.innerText = user.name
  playerWins.innerText = user.matchHistory.filter( match => match.result === "won" ).length;
  playerLosses.innerText = user.matchHistory.filter( match => match.result === "lost" ).length;
  playerMatchs.innerText = user.matchHistory.map( match => match.result ).length

  const winsCount = user.matchHistory.filter( match => match.result === "won" ).length;
  const totalMatches = user.matchHistory.length;
  const winPercentage = ( winsCount / totalMatches ) * 100;
  playerScore.innerText = winPercentage.toFixed( 1 );

  // Stoppar in kolumnerna i raden
  playerRow.appendChild( playerName );
  playerRow.appendChild( playerWins );
  playerRow.appendChild( playerLosses );
  playerRow.appendChild( playerMatchs );
  playerRow.appendChild( playerScore );

  // Stoppar in raden i tbody
  tbody.appendChild( playerRow );
}

document.body.appendChild( headLine );
document.body.appendChild( table );
