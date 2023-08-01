import React from 'react';
import './SubModal.scss';

const SubModal = () => {
    return (
        <>
            {/* Modal Code. */}
            <div className="modal fade ownAanimation" id="sanataniModal" tabIndex="-1" aria-labelledby="sanataniModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-light fs-5" id="sanataniModalLabel">SANATANI DETAILS</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            <div className="container">
                                <div className="row">
                                    <div className="mx-auto">
                                        <img src={process.env.PUBLIC_URL + '/sanatani.jpg'} className="rounded img-thumbnail mx-auto d-block mt-2" width="120" height="120" alt="sanatani" />
                                        <p className='text-light mt-2 mb-1'>Coming Soon!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubModal;
