import { getAllUsers, getOneUser } from "./server-request.js"

let user = {
  "id": "",
  "name": "",
  "matchHistory": []
}

// let playerList = getAllUsers( user.name );
// console.log( playerList );

const playerList = [ 'Kalle', 'Katrin', 'John', 'Henrik', 'Dennis' ];

const main = document.querySelector( "main" )

const form = document.createElement( 'form' );
form.id = 'playerSelect';

const select = document.createElement( 'select' );
select.id = 'selectUser';

playerList.forEach( user => {
  const option = document.createElement( 'option' );
  option.value = user.toLowerCase();
  option.textContent = user;
  select.appendChild( option );
} );

// form.addEventListener( "click", function () {
//   console.log( "get" );
//   getAllUsers( user )
//   console.log( user );
// } )

// const submitBtn = document.createElement( 'input' );
// submitBtn.setAttribute( 'type', 'submit' );
// submitBtn.value = 'Confirm';

const button = document.createElement( "button" )
button.innerText = "Select"

document.body.appendChild( main )
main.appendChild( form )
main.appendChild( select )
main.appendChild( button )

button.addEventListener( "click", function () {
  console.log( "get one user" );
  getOneUser( user )
  console.log( user );
} )
document.querySelector( 'form' ).addEventListener( 'change', selectUser );

function selectUser () {
  user.name = document.getElementById( 'playerSelect' ).value
  alert( "Info about the selected user: " + user )
}

form.appendChild( select );
form.appendChild( button );

document.body.appendChild( form );

// form.addEventListener( 'click', function ( event ) {
//   event.preventDefault();
//   console.log( select.selectedIndex );
//   const selectedUser = select.options[ select.selectedIndex ].value;
//   alert( 'Du har valt: ' + selectedUser );
// } );





