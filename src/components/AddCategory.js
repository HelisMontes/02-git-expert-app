import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [imputValue, setImputValue] = useState('');
    const handleImputChange = ( e ) => setImputValue( e.target.value );
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( imputValue.trim().length < 2 ) return;
        setCategories( catgs => [ imputValue, ...catgs ] );
        setImputValue('');
    }
    return (
        <form onSubmit={ handleSubmit }>
            {/* <p>{ imputValue }</p> */}
            <input
                type ="text"
                value={ imputValue }
                onChange={ handleImputChange }              
            /> 
        </form>
    );
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
