export async function getAllUsers () {
  const res = await fetch( '/data' )
  const data = await res.json()
  return data
}

// user = {
//   "id": 12,
//   "userName": "Kanin12",
//   "matchHistory": [
//     {
//       "opponent": "Ove",
//       "rounds": 4,
//       "result": "won"
//     }
//   ]
// }
export async function addUser (user) {
  let response = await fetch( '/data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( user)
  } )

  response = await response.json()
  console.log( response );
}

export async function getOneUser ( userId ) {
  const res = await fetch( '/data/' + userId )
  const data = await res.json()
  return data;
}

export async function updateUser ( user ) {
  let response = await fetch( '/data/' + user.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( user )
  } )

  response = await response.json()
  console.log( response );
}
