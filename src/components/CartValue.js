import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from '../App.js';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        total += (item.unitprice * item.quantity);
        if(total=total){
            alert(typeof(Budget));
        };
        return (total);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;
