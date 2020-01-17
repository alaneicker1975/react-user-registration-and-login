export const verifyUser = (token) => {
  return fetch('http://localhost:6060/api/v1/user/verify', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token }),
  });
}