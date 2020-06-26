import React, { Component } from "react";
import { login } from "../../actions/loginSignup";
import { connect } from "react-redux";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import {ButtonCustom} from '../../style/style';
import MapForm from "../../utils/forms";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const loginForm = [
  {
      name: "emailOrNickname",
      label: "Email ou Nickname",
      type: "text",
      required: true,
      // pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/",
      title: "Email ou nickname",
  },
  {
      name: "password",
      label: "Senha",
      type: "password",
      required: true,
      title: "Senha do usuário",
  }
]

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: []
    }
  }

  signIn = (e) => {
    e.preventDefault()
    this.props.login(this.state.form)
  }

  showForm = (e) =>{
    return <MapForm key="login" form={loginForm} returnForm={(form)=>{this.setState({form: form})}} />
  }

  render() {
    return (
      <LoginWrapper onSubmit={this.signIn}>
        {this.showForm()}
        <ButtonCustom type="submit"> LOGIN </ButtonCustom>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
})

export default connect (null, mapDispatchToProps)(LoginPage);
