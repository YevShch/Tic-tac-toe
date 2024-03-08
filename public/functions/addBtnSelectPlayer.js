export function addBtnSelectPlayer () {
  const selectPlayerBtn = document.createElement( 'button' );
  selectPlayerBtn.id = "selectPlayerBtn";
  selectPlayerBtn.innerText = "SELECT PLAYER";

  document.body.appendChild( selectPlayerBtn );

  const selectBtn = document.getElementById( "selectPlayerBtn" );
  selectBtn.addEventListener( "click", () => {
    location.reload();
  })
}
