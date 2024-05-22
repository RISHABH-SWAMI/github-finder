import axios from "axios";
import { createContext, useState, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKKEN = process.env.REACT_APP_GITHUB_TOKKEN;


export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(false);

    // Using useReducers() hook instead of State:-
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)


    // const link = process.env.REACT_APP_GITHUB_URL;
    // console.log('REACT_APP_GITHUB_TOKEN:', process.env.REACT_APP_GITHUB_TOKEN);

    // const fetchUsers = async () => {
    //     setLoading();
    //     dispatch({
    //         type: 'SET_LOADING',
    //         payload: true
    //     })
    //     if (!link) return
    //     const response = await axios.get(`https://api.github.com/users`, {
    //         Authorization: `token ${GITHUB_TOKKEN}`
    //     });
    //     // setUsers(response?.data)
    //     // setLoading(false);

    //     //Updating through useReducer method
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: response?.data,

    //     })
    //     console.log('response', response?.data.map(item => item.login))
    // }



    //Getting Users
    // const searchUsers = async (text) => {
    //     setLoading();
    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     // dispatch({
    //     //     type: 'SET_LOADING',
    //     //     payload: true
    //     // })
    //     if (!link) return
    //     const response = await axios.get(`https://api.github.com/search/users?${params}`, {
    //         Authorization: `token ${GITHUB_TOKKEN}`
    //     });
    //     // console.log('checkiomg', response)
    //     // setUsers(response?.data)
    //     // setLoading(false);

    //     //Updating through useReducer method:-
    //     dispatch({
    //         type: 'GET_USERS',
    //         // payload: response?.data,
    //         payload: response?.data?.items,

    //     })
    // }

    // Getting single user
    // const getUser = async (login) => {
    //     setLoading();

    //     // dispatch({
    //     //     type: 'SET_LOADING',
    //     //     payload: true
    //     // })
    //     if (!link) return
    //     const response = await axios.get(`https://api.github.com/users/${login}`, {
    //         Authorization: `token ${GITHUB_TOKKEN}`
    //     });
    //     console.log('checking', response)
    //     // setUsers(response?.data)
    //     // setLoading(false);

    //     if (response?.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         //Updating through useReducer method:-
    //         dispatch({
    //             type: 'GET_USER',
    //             // payload: response?.data,
    //             payload: response?.data,
    //         })
    //     }
    // }


    //Getting public repos 
    // const getUserRepos = async (login) => {
    //     setLoading();
    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10, 
    //     })
    //     if (!link) return
    //     const response = await axios.get(`https://api.github.com/users/${login}/repos`, {
    //         Authorization: `token ${GITHUB_TOKKEN}`
    //     });
    //     console.log( response)
    //     // setUsers(response?.data)
    //     // setLoading(false);

    //     //Updating through useReducer method:-
    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: response.data,
    //     })
    // }

    // const setLoading = () => dispatch({ type: 'SET_LOADING' })

    // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    return (
        <GithubContext.Provider
            value={{
                // users,
                // loading,

                //Using Reducers method:-
                // users: state.users,
                // loading: state.loading,
                // user: state.user,
                // repos: state.repos,
                // searchUsers,
                // clearUsers,
                // getUser,
                // getUserRepos,

                // another way of passing state variables 
                ...state,
                dispatch,
                // fetchUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;