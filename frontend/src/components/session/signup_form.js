import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email2: '',
      username: '',
      password: '',
      password2: '',
      birthdate: '',
      errors: {},
      error_touched: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false,
      },
      error_exists: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false,
      }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value, 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email2: this.state.email2,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      birthdate: this.state.birthdate,
    };
    this.resetErrorDisplay();
    this.props.signup(user, this.props.history)
  }

  resetErrorDisplay() {
    this.setState({
      error_touched: {
        email: false,
        email2: false,
        password: false,
        password2: false,
        username: false,
        birthdate: false,
      },
    })
  }

  handleOnFocus(field) {
    const touchField = this.state.error_touched;
    touchField[field] = true;
    return () => this.setState({
      touchField
    })
  }

  renderError(field) {
    if (!this.state.error_touched[field]) {
      return (
        <div id={`${field}-error`} className='signup error-div'>
          {this.state.errors[field]}
        </div>
      )
    }
  }
  
  renderInputField(field) {
    let placeholder = field.charAt(0).toUpperCase() + field.substring(1);
    if(field.includes('2')) {
      placeholder = placeholder.substring(0, placeholder.length - 1) + ' Confirm'
    }
    let type;
    if ((field.includes('email') || field === 'username')) {
      type = 'text'
    } else if (field.includes('password')) {
      type = 'password'
    } else {
      type = 'Date'
    }
    if (!this.state.error_touched[field] && this.state.errors[field]) {
      return (
          <input id={field} 
            type={type}
            className="signup-border has-error"
            value={this.state[field]}
            onChange={this.update(field)}
            placeholder={placeholder}
            onFocus={() => this.handleOnFocus(field)}/>
      )
    } else {
      return (
          <input id={field}
            type={type}
            className="signup-border"
            value={this.state[field]}
            onChange={this.update(field)}
            placeholder={placeholder}
            onFocus={() => this.handleOnFocus(field)}/>
      )
    }
  }
  render() {
    return (
      <div className="signup-form-container">
       <div className='heading' style={{
            display: 'inline-block',
            padding:'30px',
            fontSize: '36px',
            fontWeight: '900',
       }}>
         Rock-N-Roll
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <div className="signup-input email">
                {this.renderInputField('email')}
                {this.renderError('email')}
              </div>
            <br/>
              <div className="signup-input email2">
                {this.renderInputField('email2')}
                {this.renderError('email2')}
              </div>
            <br/>
              <div className="signup-input password">
                {this.renderInputField('password')}
                {this.renderError('password')}
              </div>
            <br/>
              <div className="signup-input password2">
                {this.renderInputField('password2')}
                {this.renderError('password2')}
              </div>
            <br/>
              <div className="signup-input username">
                {this.renderInputField('username')}
                {this.renderError('username')}
              </div>
            <br/>
              <div className="signup-input birthdate">
                <label>
                  Date of Birth
                  <div className="birthdate">
                    {this.renderInputField('birthdate')}
                    {this.renderError('birthdate')}
                  </div>
                </label>
              </div>
            <br/>
            <div className="signup-button">
              <input type="submit" value="SIGN UP" />
            </div>
            {/* <div className="login-instead">
              <label>
                Already have an account? 
                <Link to='/login'> Log in </Link>
              </label>
            </div> */}

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);