import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `${GITHUB_TOKEN}`}
})
// Search for Users
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const res = await github.get(`/search/users?${params}`)
    return res.data.items
}


// Get User and Repos
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "date"
    })

    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])

    return {user: user.status===404? window.location="/notfound": user.data, repos:repos.data}
}
