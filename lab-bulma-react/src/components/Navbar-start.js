import React, {Component} from 'react';

class NavStart extends Component {

  render() {
    return(    
      <div className="navbar-start">
        <a className="navbar-item" href={this.props.link}>{this.props.navLink}</a>
      </div>     
    )
  }
}

export default NavStart;