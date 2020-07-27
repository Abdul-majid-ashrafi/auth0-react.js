import React from 'react';
import { useAuth0 } from '../../contexts/auth0-context';
import { Button } from 'antd';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      {/* if there is no user. show the login button */}
      {!isAuthenticated && (
        <Button onClick={loginWithRedirect}> Login </Button>
      )}

      {/* if there is a user. show user name and logout button */}
      {isAuthenticated && (
        <>
          <Button onClick={() => logout({ returnTo: window.location.origin })}                >
            Logout
          </Button>
        </>
      )}
      <hr />
    </header>
  );
}

export default Header;