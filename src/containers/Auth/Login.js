import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }
  state = {
    username: "vuong.nguyenkieu",
    password: "",
    isShowPassword: true,
  };
  handleOnChangeUserName = (event) => {
    this.setState({ username: event.target.value });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = () => {
    console.log(
      "User: ",
      this.state.username,
      "- Password: ",
      this.state.password
    );
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="page-view">
        <div className="block-login">
          <div className="block-main">
            <h2 className="mt-2 mb-4 text-center">LOGIN</h2>
            <div className="form-group">
              <label htmlFor="UserName">User Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="UserName">Password</label>
              <div className="form-input-password">
                <input
                  type={
                    this.state.isShowPassword === true ? "password" : "text"
                  }
                  className="form-control"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                <button
                  type="button"
                  className="btn-show-password"
                  onClick={() => this.handleShowHidePassword()}
                >
                  <i
                    className={
                      this.state.isShowPassword === true
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </button>
              </div>
            </div>
            <div className="form-group">Forget your password?</div>
            <div className="pt-5 mb-3 text-center">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.handleLogin()}
              >
                LOGIN
              </button>
            </div>
            <div className="social-login">
              <button className="login-facebook">
                <i className="fab fa-facebook"></i> Login width Facebook
              </button>
              <button className="login-google">
                <i className="fab fa-google"></i> Login width Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
