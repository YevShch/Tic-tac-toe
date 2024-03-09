import { addUser } from "./server-request.js"

let user = {
  "id": "",
  "name": "",
  "matchHistory": []
}

const main = document.querySelector( "main" );

const register = document.createElement( "section" );
register.id = "register"
const head = document.createElement( "h1" );
head.id = "registerPlayer";
head.innerText = "REGISTER A NEW PLAYER";

const registerUser = document.createElement( "input" );
const registerBtn = document.createElement( "button" );
registerUser.id = "registerUser";
registerBtn.innerText = "SAVE";

register.appendChild( registerUser )
register.appendChild( registerBtn )

main.appendChild( head );
main.appendChild( register );
document.body.appendChild( main );

registerBtn.addEventListener( "click", function () {
  let input = document.querySelector( 'input' );
  if ( input.value === "" ) {
    alert ("You need to enter a name!")
  } else {
    alert( "Player " + user.name + " is registered!" );
    addUser( user );
    console.log( user );
    registerUser.value = "";
  }
} )

document.querySelector( 'input' ).addEventListener( 'change', saveUserData );

function saveUserData  () {
  user.name = document.getElementById( 'registerUser' ).value;    
};
