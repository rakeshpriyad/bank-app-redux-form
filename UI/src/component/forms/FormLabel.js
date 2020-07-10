import React from 'react';

export const FormLabel = ({labelName, fieldName, isRequire}) => <div className='label'><label htmlFor={labelName}>{fieldName}</label>{isRequire && <span className='require'>*</span>}</div>