import React from 'react'
import { Link } from 'react-router-dom';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
    return (
        <>
            <UserSearch />
            <UserResults />
        </>
    )
}

export default Home
