const TokenKey = 'Admin-Token'

export function getToken() {
  return localStorage.get(TokenKey)
}

export function setToken(token) {
  return localStorage.set(TokenKey, token)
}

export function removeToken() {
  return localStorage.remove(TokenKey)
}
