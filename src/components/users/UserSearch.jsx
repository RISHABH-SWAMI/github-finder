import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubAction';

const UserSearch = () => {
    const { users, dispatch,  } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === '') {
            // alert('Please fill something');
            setAlert('Please fill something', 'error')
        } else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text);
            dispatch({ type: 'GET_USERS', payload: users })
            setText('');
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8' >
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-control">
                        <div className="relative">
                            <input placeholder="Search" type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                value={text}
                                onChange={handleChange}
                            />
                            <button type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users?.length > 0 && (
                <button className='btn btn-ghost btn-lg' onClick={() => dispatch({type: 'CLEAR_USERS'})}  >CLEAR</button>
            )}
        </div>
    )
}

export default UserSearch
