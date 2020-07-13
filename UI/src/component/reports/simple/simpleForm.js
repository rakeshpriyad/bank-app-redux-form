import React from 'react'
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../FormLabel';
import '../../../App.css';
import { renderField } from '../FormInputField'


const SimpleForm = (props) => {
	const {asyncValidating, handleSubmit, mode, submitUserAction,submitLoadUserAction,  pristine, submitting, reset} = props
return (	
<form onSubmit={handleSubmit}/* {handleSubmit((fields) => submit(fields, submitUserAction, reset))} */ id='form1' className='mLabForm'>
<div className='form-row'>
<FormLabel labelName={'User Name'} fieldName={'User Name'} isRequire={true} />
<Field component={renderField} type='text' placeholder='User Name' name='userName' id='userName' />
</div>

<div className='form-row'>
<FormLabel labelName={'Address '} fieldName={'Address'} isRequire={true} />
<Field component={renderField} type='text' placeholder='Address' name='address' id='address' />
</div>
<div className={`submitBtn u-mt30 u-mb80`}>
	<button type='submit'>Submit</button>
</div>

</form>
)
}
