import React, {Component} from 'react';

import Button from '../common/button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      displayedValue: ''
    }
  }


  render() {
    return (
      <div className='login'>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.setState({displayedValue: this.state.inputValue});
        }}>
          <label>Name</label><br />
          <input value={this.state.inputValue}
                 onChange={(event) => {
                     this.setState({inputValue: event.target.value});
                 }}
                 required
          /><br />
          <Button>Submit</Button><br />
          <div className="displayed-value">{this.state.displayedValue}</div>
        </form>
      </div>
    );
  }
}


export default Login;
