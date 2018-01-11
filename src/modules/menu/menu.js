import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Button from '../common/button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='menu'>
        <label>Menu</label>
        <br />
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <br />
        <Link to="/book">
          <Button>Books</Button>
        </Link>
      </div>
    );
  }
}

export default Header;
