import React from 'react';
import './Alert.scss';

const Alert = () => {
    return (
        <>
            <section className='Alert'>
                <div className="alertbox px-1">
                    <img src={process.env.PUBLIC_URL + '/notificationIcon.png'} className="mx-auto d-block m-1" width="25" height="25" alt="alert icon" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </div>

                {/* Collapse Code. */}
                <div class="alertboxData text-start " >
                    <div class="alert alert-light collapse p-1" id="collapseExample" role="alert">
                        <div class="card card-body d-flex align-items-center flex-row py-1 pe-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" width={20} role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <p className="mb-0 me-5">Website is under development.</p>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Alert;
