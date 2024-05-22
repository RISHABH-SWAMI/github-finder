
import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKKEN = process.env.REACT_APP_GITHUB_TOKKEN;

const github = axios.create({
    baseURL: `https://api.github.com`,
    // headers: {
    //     Authorization: `token ${GITHUB_TOKKEN}`
    // }
})


const link = process.env.REACT_APP_GITHUB_URL;


export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    if (!link) return
    // const response = await axios.get(`https://api.github.com/search/users?${params}`, {
    //     Authorization: `token ${GITHUB_TOKKEN}`
    // });
    const response = await github.get(`/search/users?${params}`);

    //Updating through useReducer method:-
    // dispatch({
    //     type: 'GET_USERS',
    //     // payload: response?.data,
    //     payload: response?.data?.items,
    // })
    const data = response?.data?.items;
    return data;
}

// export const getUser = async (login) => {
//     if (!link) return
//     const response = await axios.get(`https://api.github.com/users/${login}`, {
//         Authorization: `token ${GITHUB_TOKKEN}`
//     });

//     if (response?.status === 404) {
//         window.location = '/notfound'
//     } else {
//         //Updating through useReducer method:-
//         // dispatch({
//         //     type: 'GET_USER',
//         //     // payload: response?.data,
//         //     payload: response?.data,
//         // })
//         const data = response?.data;
//         return data;
//     }
// }


//Getting public repos 
// export const getUserRepos = async (login) => {
//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page: 10, 
//     })
//     if (!link) return
//     const response = await axios.get(`https://api.github.com/users/${login}/repos`, {
//         Authorization: `token ${GITHUB_TOKKEN}`
//     });
//     console.log( response)

//     //Updating through useReducer method:-
//     // dispatch({
//     //     type: 'GET_REPOS',
//     //     payload: response.data,
//     // })
//     const data = response?.data;
//     return data;
// }

//Combining getUsers and getUserRepos functions into one function
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data }
}