import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LogoElement,
  FormContainer,
  Label,
  InputElement,
  CheckboxContainer,
  CheckBox,
  LabelCheckBox,
  ButtonElement,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    checkbox: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({showPassword: true, errorMsg: msg})
  }

  onSubmitLoginButton = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  showPassword = () => {
    this.setState(prev => ({checkbox: !prev.checkbox}))
  }

  render() {
    const {showPassword, errorMsg, username, password, checkbox} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LogoElement
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <FormContainer onSubmit={this.onSubmitLoginButton}>
          <Label htmlFor="username">USERNAME</Label>
          <InputElement
            type="text"
            placeholder="Username"
            value={username}
            id="username"
            onChange={this.onChangeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <InputElement
            placeholder="Password"
            value={password}
            id="password"
            onChange={this.onChangePassword}
            type={checkbox ? 'text' : 'password'}
          />
          <CheckboxContainer>
            <CheckBox
              type="checkbox"
              htmlFor="checkbox"
              onClick={this.showPassword}
            />
            <LabelCheckBox id="checkbox">Show Password</LabelCheckBox>
          </CheckboxContainer>
          {showPassword && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <ButtonElement type="onSubmit">Login</ButtonElement>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
