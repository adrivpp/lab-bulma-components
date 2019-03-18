import React, {Component} from 'react';
import NavStart from './Navbar-start';
import NavEnd from './Nav-end';
import classNames from 'classnames';

class Navbar extends Component {

  render() {
    return(
      <nav className={this.props.styleClass}>
        <div className="navbar-brand">
          <a className="navbar-item" href={this.props.link}>
            <img src={this.props.image} alt="icon" width="112" height="28"/>
          </a>
        </div>
        <NavStart navLink={'Home'}/>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <NavEnd anchorText={'Login'} styleClass={classNames('is-info', 'button')}/>
              <NavEnd anchorText={'Signup'} styleClass={classNames('is-primary', 'button')}/>
            </div>
          </div>
        </div>    
      </nav>
    )
  }
}

export default Navbar;