import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import BookDescription from './bookDescription';
import Button from '../common/button';
import {fetchBookAction} from '../../actions/book.actions';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'react'
    };
    this.refreshList = this.refreshList.bind(this);
    this.debounceRefreshList = _.debounce(this.refreshList, 1000)
  }

  refreshList() {
    this.props.fetchBookAction(this.state.searchText)
  }

  componentDidMount() {
    this.debounceRefreshList();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='book-list container'>
        <label>Books</label><br />
        <input value={this.state.searchText}/><br />
        <Button>Find</Button><br />
        <div className="row">
          <div className="col-md-6">
            <ul>
              {_.map(this.props.books, (book, index) => (
                <li key={index}><Link to={`${match.url}/${index}`}>{book.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <Route path={`${match.url}/:index`} component={BookDescription}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.book
  };
}

export default connect(mapStateToProps, { fetchBookAction })(Book);
