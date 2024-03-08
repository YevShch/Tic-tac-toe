export function createCurPly () {
  // Create <section> element
  const sectionElement = document.createElement( "section" );
  sectionElement.className = "currentPlayer";

  // Create <h2> element
  const h2Element = document.createElement( "h2" );


  // Create <span>
  const outerSpan = document.createElement( "span" );
  const innerSpan = document.createElement( "span" );
  innerSpan.id = "curPlyr";
  innerSpan.textContent = "X";

  // Create text " is going now "
  const textNode = document.createTextNode( " is going now " );

  // Append all elements 
  h2Element.appendChild( outerSpan );
  outerSpan.appendChild( innerSpan );
  outerSpan.appendChild( textNode );
  sectionElement.appendChild( h2Element );

   // Append all elements to the  <body>)
  document.body.appendChild( sectionElement );
}
