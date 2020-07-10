import React from 'react';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../FormLabel';
import {renderField} from '../FormInputField';
import {renderSelectField} from '../FormSelectField';
// import asyncValidate from '../../actions/acyncValidation';


import 'object-assign';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const save = ({userName='', emailAddress='', mobileNo='', address='' }, submitUserActionx, reset) => {
    return sleep(1000).then(() => {
      // simulate server latency
      let error = {};
      let isError = false;
      
      if(userName.trim() === '') {
          error.userName = 'User Name is mandatory field';
          isError = true;
      }
      if(mobileNo.trim() === '') {
          error.mobileNo = 'Mobile no# is mandatory field';
          isError = true;
      }
  
      if (address.trim() === '') {
          error.address = 'Address is mandatory field';
          isError = true;
      }
  
      if (emailAddress.trim() === '') {
          error.emailAddress = 'Email is mandatory field';
          isError = true;
      } 
      if (isError) {
          console.log(isError, 'Error ');
          throw new SubmissionError(error);
  
      } else {
          console.log(' isError', isError);
          submitUserActionx({userName, emailAddress, mobileNo, address});
          window.alert(`submiting Data:\n\n${JSON.stringify({userName, emailAddress, mobileNo, address}, null, 2)}`)
         // reset();
      }
    })
  }

  const update = ({userName='', emailAddress='', mobileNo='', address='' }, submitUserActionx, reset) => {
    return sleep(1000).then(() => {
      // simulate server latency
      let error = {};
      let isError = false;
      
      if(userName.trim() === '') {
          error.userName = 'User Name is mandatory field';
          isError = true;
      }
      if(mobileNo.trim() === '') {
          error.mobileNo = 'Mobile no# is mandatory field';
          isError = true;
      }
  
      if (address.trim() === '') {
          error.address = 'Address is mandatory field';
          isError = true;
      }
  
      if (emailAddress.trim() === '') {
          error.emailAddress = 'Email is mandatory field';
          isError = true;
      } 
      if (isError) {
          console.log(isError, 'Error ');
          throw new SubmissionError(error);
  
      } else {
          console.log(' isError', isError);
          submitUserActionx({userName, emailAddress, mobileNo, address});
          window.alert(`submiting Data:\n\n${JSON.stringify({userName, emailAddress, mobileNo, address}, null, 2)}`)
         // reset();
      }
    }).catch(e => {
       // dispatch(loginUserFailure(e));
      });
        
  }




const stateOptions = [{id: "BH", value: "Bihar" }, {id: "UP", value: "UP" }]
const RechargeFormFunc = ({asyncValidating, handleSubmit, submitAction,  pristine, submitting, reset}) => (
    
<form onSubmit={handleSubmit((fields) => save(fields, submitAction, reset))} id='form1' className='mLabForm'>
    <div className='form-row'>Recharge</div>    
    <div className='form-row'>
        <FormLabel labelName={'accountHolderName'} fieldName={'Account holder Name'} isRequire={true} />
        <Field component={renderField} type='text' placeholder='Name ' name='accountHolderName' id='accountHolderName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'gender'} fieldName={'Gender'} isRequire={true} />
    <Field component={renderField} type='radio' placeholder='Gender ' name='g' id='g' value="M" /> {' '} Male
    <Field component={renderField} type='radio' placeholder='Gender ' name='g' id='g' value="F" /> {' '} Female
           
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Account No'} labelName={'accountNo'} isRequire={true} />
        <Field component={renderField} type='text' placeholder='accountNo' name='accountNo' id='accountNo' />
    </div>
    
    <div className='form-row'>
        <FormLabel fieldName={'Email'} labelName={'emailAddress'} isRequire={true} />
        <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='emailAddress' 
        id='emailAddress' />
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Mobile No'} labelName={'mobileNo'} isRequire={false} />
        <Field component={renderField} type='number' placeholder='0800000000' name='mobileNo' id='mobileNo' />
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Address1'} labelName={'address1'} isRequire={true} />
        <Field component={renderField} type='input' placeholder='Address1' name='address1' id='address1' />
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Address2'} labelName={'address2'} isRequire={true} />
        <Field component={renderField} type='input' placeholder='Address2' name='address2' id='address2' />
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Address3'} labelName={'address3'} isRequire={true} />
        <Field component={renderField} type='input' placeholder='Address3' name='address3' id='address3' />
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'City'} labelName={'city'} isRequire={true} />
        <Field component={renderField} type='input' placeholder='City' name='city' id='city' />
    </div>
    <div className='form-row'>
        <Field name="state" component={renderSelectField} label="State">
         { stateOptions.map(option => <option value={option.id} key={option.id}>{option.value}</option>) }
        </Field>
    </div>
    <div className='form-row'>
        <FormLabel fieldName={'Country'} labelName={'country'} isRequire={true} />
        <Field component={renderField} type='input' placeholder='Country' name='country' id='country' />
    </div>
    <div className={`submitBtn u-mt30 u-mb80`}>
        <button type='submit'>Save</button>
    </div>
    <div className={`submitBtn u-mt30 u-mb80`}>
        <button type='button' onClick={ (fields) => update(fields, submitAction, reset) }>Update</button>
    </div>
    </form>
)

const RechargeForm = reduxForm({
    form: 'contact',
})(RechargeFormFunc);

export default RechargeForm;