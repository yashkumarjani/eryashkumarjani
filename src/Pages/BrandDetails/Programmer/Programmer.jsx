import React from 'react';
import './Programmer.scss';
import SubModal from './subModal/SubModal';

const Programmer = () => {
    return (
        <>
            {/* Programmer Code. */}
            <img src={process.env.PUBLIC_URL + '/laptop.gif'} className="rounded mx-auto d-block cursor-pointer" width="50" height="50" alt="Programmer logo" data-bs-toggle="modal" data-bs-target="#programmerModal" />
            <p className='text-light mt-1 fs-6'> PROGRAMMER</p>

            {/* Modal Code. */}
            <SubModal />
        </>
    )
}

export default Programmer;
