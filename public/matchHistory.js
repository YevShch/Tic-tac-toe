import { createSelectForPlayer } from "./functions/createSelectForPlayer.js"

const main = document.querySelector( "main" );

const headLine = document.createElement( "h1" );
headLine.id = "headMatchHistory";
headLine.innerText = "MATCH HISTORY";
// document.body.appendChild( headLine );
main.appendChild( headLine );

createSelectForPlayer();

