import React from 'react';
import './Sanatani.scss';
import SubModal from './subModal/SubModal';

const Sanatani = () => {
    return (
        <>
            {/* Sanatani Code. */}
            <img src={process.env.PUBLIC_URL + '/om.gif'} className="rounded mx-auto d-block cursor-pointer" width="50" height="50" alt="sanatani logo" data-bs-toggle="modal" data-bs-target="#sanataniModal" />
            <p className='text-light mt-1 fs-6'> SANATANI</p>

            {/* Modal Code. */}
            <SubModal />
        </>
    )
}

export default Sanatani;
