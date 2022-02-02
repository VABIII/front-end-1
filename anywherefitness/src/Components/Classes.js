import React, { useEffect, useState } from 'react';
import Class from "./Class";
import axiosWithAuth from "../utils/axiosWithAuth";
import '../styles/Classes.css'


const classesInitialValues = [];

const Classes = () => {
    const [classes, setClasses] = useState(classesInitialValues);

    useEffect(() => {
        axiosWithAuth()
            .get('https://anywhere-fitness-07-backend.herokuapp.com/api/classes')
            .then((res) => {
                console.log(res)
                setClasses(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
    <div className='classes-container'>
        <div>
            <h1>Classes</h1>
        </div>
        <div className='classes-map'>
            {
                classes.map((oneClass, i) => {
                    return <Class key={i} oneClass={oneClass} />
                })
            }
        </div>
    </div>
    );
};

export default Classes;
































