import React, { useContext, useState } from 'react'
// import { useEffect } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';
const UserResults = () => {

    const {users, loading} = useContext(GithubContext);

    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(false);

    // console.log('GITHUB_URL:', process.env.REACT_APP_GITHUB_URL);
    // const link = process.env.REACT_APP_GITHUB_URL;
    // console.log('REACT_APP_GITHUB_TOKEN:', process.env.REACT_APP_GITHUB_TOKEN);


    // const fetchUsers = async () => {
    //     setLoading(true);
    //     if (!link) return
    //     const response = await axios.get(`https://api.github.com/users`, {
    //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //     });
    //     setUsers(response?.data)
    //     setLoading(false);
    //     console.log('response', response?.data.map(item => item.login))
    // }


    // console.log('users', users)
    // useEffect(() => {
    //     fetchUsers();
    // }, [])
    if (loading) {
        console.log('loading', loading)
       return <Spinner />
    } else {
        console.log('loading', loading)
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users?.length > 0 && users.map((user) => {
                    return <UserItem key={user?.id} user={user} />
                })}
            </div>
        )
    }
}

export default UserResults
