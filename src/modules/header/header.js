import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from '../common/button';
import {logoutAction} from '../../actions/user.actions';

class Header extends Component {
  renderUserInfo() {
    if (!this.props.userName) {
      return;
    }
    return (
      <span>
        <span>Logged as: </span>
        <strong>{this.props.userName}</strong>
      </span>
    );
  }

  render() {
    return (
      <div className='header'>
        <div className="pull-left left">
          <Link to="/">
            <img src="/images/react-hexagon.png"/>
          </Link>
        </div>
        <div className="pull-right right">
          {this.renderUserInfo()}
          <Button onClick={() => {
            this.props.logoutAction();
          }}>logout</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user.name
  };
}

export default connect(mapStateToProps, { logoutAction })(Header);
