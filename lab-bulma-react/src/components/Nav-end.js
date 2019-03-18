import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';

class NavEnd extends Component {
  render(){
    return(    
      <p class="control">
      <a className={this.props.styleClass} href={this.props.anchorLink}>{this.props.anchorText}</a>
      </p>                           
    )
  }
}

export default NavEnd;
