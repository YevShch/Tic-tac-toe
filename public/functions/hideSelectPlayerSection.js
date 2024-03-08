import { addBtnSelectPlayer } from "./addBtnSelectPlayer.js";

export function hideSelectPlayerSection () {
  const selectPlayer = document.getElementById( 'selectUser' );
  const selectBtn = document.getElementById( 'fixName' );
  selectPlayer.style.visibility = 'hidden';
  selectBtn.style.visibility = 'hidden';

   addBtnSelectPlayer();
}
