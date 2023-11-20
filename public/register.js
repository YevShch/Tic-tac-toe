import { addUser } from "./server-request.js"

let user = {
  "id": "",
  "name": "",
  "matchHistory": []
}


const main = document.querySelector( "main" )

const head = document.createElement( "h2" )
head.innerText = "Register new user";
const br = document.createElement( "br" )
const br1 = document.createElement( "br" )

const registerUser = document.createElement( "input" )
const submitBtn = document.createElement( "button" )
registerUser.id = "registerUser"
submitBtn.innerText = "Save"

main.appendChild( head )
// main.appendChild(br)

// main.appendChild( br1 )
main.appendChild( registerUser )
main.appendChild( submitBtn )

// document.body.appendChild( main )

submitBtn.addEventListener( "click", function () {
  console.log( "post" );
  addUser(user)
  console.log(user);
} )


document.querySelector( 'input' ).addEventListener( 'change', saveUserData );

function saveUserData  () {
   user.name = document.getElementById('registerUser').value
     
}
