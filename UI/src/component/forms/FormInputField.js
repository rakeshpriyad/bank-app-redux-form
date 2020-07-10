import React from 'react';

//export const FormLabel = ({labelName, fieldName, isRequire}) => <div className='label'><label htmlFor={labelName}>{fieldName}</label>{isRequire && <span className='require'>*</span>}</div>
export const renderField = ({type,placeholder,  label, input,  meta: {touched, error}}) => (
<span className='field'>
    <input {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);