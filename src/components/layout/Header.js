import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

// import logo from '../../images/logo.png';

const Header = () => {
  const [state, setState] = useState({
    activeItem: 'home',
  });

  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
  };

  // const handleSignOut = (e) => {
  //   const { signoutAction } = props;

  //   signoutAction(e);
  // };

  // const handleSignIn = (e) => {
  //   const { loginAction } = props;

  //   loginAction(e);
  // };

  const { activeItem } = state;

  return (
    <Menu pointing secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        {/* <Image size="mini" bordered centered circular src={logo} /> */}
      </Menu.Item>
      {/* <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      /> */}
      <Menu.Menu position="right">
        <Menu.Item
          name="auth"
          active={activeItem === 'auth'}
          onClick={handleItemClick}
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
};

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
  // loginAction: PropTypes.func.isRequired,
  //   signUpAction: PropTypes.func.isRequired,
  // signoutAction: PropTypes.func.isRequired,

  //   errorMessage: PropTypes.object,
  //   loading: PropTypes.bool,
};

export default Header;
