import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='hero'>
            <div className='text-center hero-content' >
                <div className="max-w-lg">
                    <hl className="text—8xl font-bold mb-8">
                        Oops !
                    </hl>
                    <p className='text 5-xl mb-8'>404 - Page not found</p>
                    <Link to='/' className='btn btn-primary btn-lg'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
