import React from 'react';
import './Dashboard.scss';
import BrandDetails from '../BrandDetails/BrandDetails';
import Alert from '../../Features/Alert/Alert';

const Dashboard = () => {
    return (
        <>
            {/* Background Animation Code. */}
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                    ❅
                </div>
                <div class="snowflake">
                    ❅
                </div>
                <div class="snowflake">
                    ❆
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❅
                </div>
                <div class="snowflake">
                    ❆
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❅
                </div>
                <div class="snowflake">
                    ❆
                </div>
                <div class="snowflake">
                    ❄
                </div>
            </div>

            {/* Alert Code. */}
            <Alert />

            {/* Dashboard Soon Code. */}
            <section className='dashboard d-flex justify-content-center align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img id="logo" src={process.env.PUBLIC_URL + '/eryashkumarjani.jpg'} className="rounded-circle mx-auto d-block" width="250" height="250" alt="brand logo of eryashkumarjani" />
                        </div>
                        <div className="col-md-7 text-center">
                            <p className='text text-light mt-4 mb-0 fs-3'> Hi, I'm a <span className='text-warning'> YASHKUMAR JANI</span>.</p>
                            <p className='text-light fst-italic fs-6'>below you can choose my personality. 🤞</p>
                            <BrandDetails />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Dashboard