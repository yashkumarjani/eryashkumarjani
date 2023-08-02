import React, { useState } from 'react';
import './Admin.scss';
import { useDispatch } from 'react-redux';
import { createPojectsData } from '../services/actorDetailsSlice';

const Admin = () => {
    const [projectsData, setProjectsData] = useState({});

    const dispatch = useDispatch();

    const getProjectsData = (e) => {
        setProjectsData({ ...projectsData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("projectsData...", projectsData);
        dispatch(createPojectsData(projectsData));
    };
    return (
        <>
            <div>
                <h2 className="my-2">Fill the data</h2>
                <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            class="form-control"
                            onChange={getProjectsData}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Type</label>
                        <input
                            type="text"
                            name="type"
                            class="form-control"
                            onChange={getProjectsData}
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Link</label>
                        <input
                            type="text"
                            name="link"
                            class="form-control"
                            onChange={getProjectsData}
                            required
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Admin