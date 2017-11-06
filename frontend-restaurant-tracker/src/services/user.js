export function loginUser(loginParams) {
  const body = JSON.stringify(loginParams)
  return fetch("https://my-spots-back.herokuapp.com/login", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  }
  ).then((user) => user.json())
}


export function logoutUser() {
  localStorage.removeItem("jwtToken")
}