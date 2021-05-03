import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import logo from '../../images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  handleSignOut = (e) => {
    const { signoutAction } = this.props;

    signoutAction(e);
  };

  handleSignIn = (e) => {
    const { loginAction } = this.props;

    loginAction(e);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Image
            size="mini"
            bordered
            centered
            circular
            src={logo}
          />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="auth"
            active={activeItem === 'auth'}
            onClick={this.handleItemClick}
          >
            <Button.Group>
              <Link to="/login">
                <Button>Signin</Button>
              </Link>

              <Button.Or />
              <Link to="/register">
                <Button positive>Signup</Button>
              </Link>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Header.defaultProps = {
//   authenticated: false,
//   profile: {
//     username: '',
//     first_name: '',
//     last_name: '',
//   },
};

Header.propTypes = {
//   authenticated: PropTypes.bool,
//   profile: PropTypes.shape({
//     username: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//   }),
//   getMyProfileAction: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  //   signUpAction: PropTypes.func.isRequired,
  signoutAction: PropTypes.func.isRequired,

//   errorMessage: PropTypes.object,
//   loading: PropTypes.bool,
};

export default Header;
