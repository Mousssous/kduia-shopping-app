import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { Location } = useContext(AppContext);
    const Budget = 500;
    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location}{Budget}</span>
        </div>
    );
};

export default Budget;
