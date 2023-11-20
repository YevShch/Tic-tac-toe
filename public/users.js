import { getAllUsers, getOneUser } from "./server-request.js"

let user = {
  "id": "",
  "name": "",
  "matchHistory": []
}


// // const main = document.createElement( "main" )

// // main.appendChild(selectPlayers)
// // document.body.appendChild( main )


// // export default function selectPlayers () {
//   const playersArray = [ 'Kalle', 'Katrin', 'John', 'Henrik', 'Dennis' ];
const main = document.querySelector( "main" )

  const form = document.createElement( 'form' );
  form.id = 'playerSelect';

  const select = document.createElement( 'select' );
select.id = 'player1';
  // select.setAttribute( 'name','player1' );

  playersArray.forEach( user => {
    const option = document.createElement( 'option' );
    option.value = user.toLowerCase();
    option.textContent = user;
    select.appendChild( option );
  } );

  const submitBtn = document.createElement( 'input' );
  submitBtn.setAttribute( 'type', 'submit' );
  submitBtn.value = 'Confirm';

  form.appendChild( select );
  form.appendChild( submitBtn );

  document.body.appendChild( form );

  form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();
    console.dir( select )
    console.log( select.selectedIndex );
    const selectedPlayer = select.options[ select.selectedIndex ].value;
    alert( 'You have selected: ' + selectedPlayer );
  } );

// }





