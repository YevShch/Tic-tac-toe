import { getOneUser, updateUser } from "../server-request.js";

export async function updateMatchHistory () {
 

  const getPlayer1Id = document.getElementById( "player1Select" ); //grab the element containing the id of player number 1
  const getValue1 = getPlayer1Id.value; 
  const id1 = getValue1;
  const user1 = await getOneUser( id1 )
  console.log( "id1 to send " +  id1);

  const getPlayer2Id = document.getElementById( "player2Select" ); //grab the element containing the id of player number 2
  const getValue2 = getPlayer2Id.value;
  const id2 = getValue2;
  const user2 = await getOneUser( id2 )
  console.log("id2 to send " + id2 );

  let user1Opponent = user2.name  //name of opponent to player1

  let spanElement = document.getElementById( 'sX' );
  let result1 = spanElement.textContent; //grab result of player1

  let spanEl = document.getElementById( 'sR' );
  // let rounds = spanEl.textContent; // how much rounds
  let rounds = parseInt( spanEl.textContent );

  console.log( user1Opponent, result1, rounds );

  let user2Opponent = user1.name  //name of opponent to player2

  let spanElement2 = document.getElementById( 'sO' );
  let result2 = spanElement2.textContent; //grab result of player 2
 
  console.log( user2Opponent, result2, rounds );


  user1.matchHistory.push( {
    "opponent": user1Opponent,
    "rounds": spanEl.textContent,
    "result": result1,
  } )
  console.log( "after - ", user1 );
  updateUser( user1 )


  user2.matchHistory.push( {
    "opponent": user2Opponent,
    "rounds": spanEl.textContent,
    "result": result2,
  } )
  console.log( "after - ", user2 );
  updateUser( user2 )
};
