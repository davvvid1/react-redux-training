import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';


class BookDescription extends Component {
  shouldComponentUpdate(nextProps) {
    return '9' !== nextProps.match.params.index;
  }

  render() {
    return (
      <div className='book-description'>
        {this.props.book.description}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    book: _.get(state.book, props.match.params.index) || {}
  };
}

export default connect(mapStateToProps)(BookDescription);
