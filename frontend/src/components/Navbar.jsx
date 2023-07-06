import {TopNav} from 'govuk-react';
import PropTypes from "prop-types";

Navbar.propTypes = {
  isLogin: PropTypes.bool,
}

export default function Navbar({isLogin}) {
  return (
    <TopNav
      company={
        <TopNav.IconTitle>PMS</TopNav.IconTitle>}
    >
      <TopNav.NavLink href="/">
        Home
      </TopNav.NavLink>
      {
        isLogin ?
          <TopNav.NavLink href="/">
            Logout
          </TopNav.NavLink>
          :
          <>
            <TopNav.NavLink href="/login">
              Login
            </TopNav.NavLink>
            <TopNav.NavLink href="/signup">
              Signup
            </TopNav.NavLink>
          </>
      }
    </TopNav>
  )
}
