import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import classNames from 'classnames';
import Navbar from './components/Navbar';
import FormField from './components/Form';
import Signup from './components/Signup';
import Message from './components/Message';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Navbar image={'https://bulma.io/images/bulma-logo.png'} styleClass={classNames('navbar', 'is-transparent')}/>
        <FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'}/>
        <FormField label={'Email'} type={'email'} placeholder={'e.g alexsmith@gmail.com'}/>
        <Button text={'Button 1'} styleClass={classNames('button', 'is-danger', 'is-rounded', 'is-large')}/>
        <Button text={'Button 2'} styleClass={classNames('button', 'is-primary', 'is-large')}/>
        <Signup/>     
        <Message title={'Hello World'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} strong={'Pellentesque risus mi'}/>
      </div>
    );
  }
}

export default App;
