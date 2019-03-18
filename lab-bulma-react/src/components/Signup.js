import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';
import Navbar from './Navbar';
import FormField from './Form';

class Signup extends Component {
  render() {    
    return (
      <div className="App">
        <Navbar image={'https://bulma.io/images/bulma-logo.png'} styleClass={classNames('navbar', 'is-transparent')}/>
        <FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'}/>
        <FormField label={'Email'} type={'email'} placeholder={'e.g alexsmith@gmail.com'}/>
        <FormField label={'Password'} type={'password'} placeholder={'e.g 123aS'}/>      
        <Button text={'Submit'} styleClass={classNames('button', 'is-link')}/>
      </div>
    );
  }
}

export default Signup;