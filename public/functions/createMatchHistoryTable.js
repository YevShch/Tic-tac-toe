import { getOneUser } from "../server-request.js";

export async function createMatchHistoryTable () {
  
  const getPlayerId = document.getElementById( "select1User" ); //grab the element containing the id of player number 1
  const getValue = getPlayerId.value;
  const id = getValue;
  const user = await getOneUser( id )
  console.log( "id to send " + id);
console.log(user);

  const table = document.createElement( "table" )
  table.setAttribute( "class", "matchHistory" );
  
  const main = document.querySelector( "main" );

  const headPlayer = document.createElement( "h2" );
  headPlayer.id = "headPlayer";
  const spanPlayerName = document.createElement( "span" );
  const spanTotalMatches = document.createElement( "span" );
  const totalMatches = user.matchHistory.length;
  spanTotalMatches.innerText = totalMatches + ' matches';
  spanPlayerName.innerText = user.name + ' has played ';

  headPlayer.appendChild( spanPlayerName );
  headPlayer.appendChild( spanTotalMatches );

  // document.body.appendChild(headPlayer);
  main.appendChild( headPlayer );

  const titelRow = document.createElement( "tr" );
  titelRow.id = "titelRow";

  const opponentName = document.createElement( "td" );
  const rounds = document.createElement( "td" );
  const result = document.createElement( "td" );

  opponentName.id = "opponentName";
  opponentName.innerText = "Opponent";

  rounds.id = "rounds";
  rounds.innerText = "Rounds";

  result.id = "Result";
  result.innerText = "Result";

  titelRow.appendChild( opponentName ); 
  titelRow.appendChild( rounds);
  titelRow.appendChild( result );

  table.appendChild( titelRow ); 

  const matchHistoryArray = user.matchHistory.map( match => match );
  console.log( matchHistoryArray );

  // document.body.appendChild( table )
  main.appendChild( table );

  matchHistoryArray.forEach( ( match ) => {

    const playerHistoryRow = document.createElement( "tr" );

    // Create cells for opponent, rounds, and result
    const opponentCell = document.createElement( "td" );
    const roundsCell = document.createElement( "td" );
    const resultCell = document.createElement( "td" );

    // Set the text content for each cell
    opponentCell.textContent = match.opponent;
    roundsCell.textContent = match.rounds;
    resultCell.textContent = match.result;

    // Append the cells to the row
    playerHistoryRow.appendChild( opponentCell );
    playerHistoryRow.appendChild( roundsCell );
    playerHistoryRow.appendChild( resultCell );

    table.appendChild( playerHistoryRow );
  } );
}

