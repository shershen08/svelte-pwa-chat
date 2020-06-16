
const userAPi = `https://${process.env.wsUrl}/api/users`

export const loadUsers = () => {
    return fetch(userAPi)
    .then(response => response.json())
}
