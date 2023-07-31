import React from 'react';
import './ComingSoon.scss';

const ComingSoon = () => {
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

      {/* Coming Soon Code. */}
      <section className='comingSoon d-flex flex-column justify-content-center align-items-center'>
        <img id="logo" src={process.env.PUBLIC_URL + '/eryashkumarjani.jpg'} className="rounded-circle mx-auto d-block" width="200" height="200" alt="brand logo of eryashkumarjani" />
        <p className='text text-light fst-italic mt-3 fs-6'> Coming soon!</p>
      </section>
    </>
  )
}

export default ComingSoon