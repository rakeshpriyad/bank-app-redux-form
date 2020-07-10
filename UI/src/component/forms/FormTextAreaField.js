import React from 'react';

export const renderFieldTextarea = ({type, placeholder,label, input, textarea, meta: {touched, error}}) => (
    <span className='field'>
        <textarea {...input} type={type} className='' placeholder={placeholder} />
        {touched && error && <span className='error'>{error}</span>}
    </span>
 );