import React from 'react';
import './BrandDetails.scss';
import Sanatani from "../BrandDetails/Sanatani/Sanatani"
import Programmer from "../BrandDetails/Programmer/Programmer"
import Actor from "../BrandDetails/Actor/Actor"

const BrandDetails = () => {

    return (
        <>
            {/* BrandDetails Code. */}
            <div className="brandDetails container">
                <div className="row pt-3">
                    <div className="col">
                        <Sanatani />
                    </div>
                    <div className="col">
                        <Programmer />
                    </div>
                    <div className="col">
                        <Actor />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandDetails;
