import React from 'react';
import './Actor.scss';
import SubModal from './subModal/SubModal';

const Actor = () => {
    return (
        <>
            {/* Actor Code. */}
            <img src={process.env.PUBLIC_URL + '/actor.gif'} className="rounded mx-auto d-block cursor-pointer" width="50" height="50" alt="Actor logo" data-bs-toggle="modal" data-bs-target="#actorModal" />
            <p className='text-light mt-1 fs-6'> ACTOR</p>

            {/* Modal Code. */}
            <SubModal />
        </>
    )
}

export default Actor;
