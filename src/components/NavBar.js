import React, { Fragment }  from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Button, Dropdown, Menu } from 'semantic-ui-react'


const NavBar = (props) => {
  let {
    location: {
      pathname
    }
  } = props
  let logged_in = props.logged_in;
  let logout = props.logout
  return (
      <Menu size='large' className="bar">
  {
      logged_in ? ( <
        Fragment >
        <
        Menu.Item as = {
          NavLink
        }
        to = "/"
        name = "Home"
        active = {
          pathname === "/"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/about"
        name = "About us"
        active = {
          pathname === "/about"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/photos"
        name = "Photo Gallery"
        active = {
          pathname === "/photos"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/sale"
        name = "For Sale or Rent"
        active = {
          pathname === "/sale"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/projects"
        name = "Projects"
        active = {
          pathname === "/projects"
        }
        /> <
        Menu.Menu position = "right" >
        <
        Menu.Item to = "/logout"
        name = "Logout"
        onClick = {
          logout
        }
        /> <
        /Menu.Menu> <
        /Fragment>
      ) : ( <
        Fragment >
        <
        Menu.Item as = {
          NavLink
        }
        to = "/"
        name = "Home"
        active = {
          pathname === "/"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/about"
        name = "About us"
        active = {
          pathname === "/about"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/photos"
        name = "Photo Gallery"
        active = {
          pathname === "/photos"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/sale"
        name = "For Sale or Rent"
        active = {
          pathname === "/sale"
        }
        /> <
        Menu.Item as = {
          NavLink
        }
        to = "/projects"
        name = "Projects"
        active = {
          pathname === "/projects"
        }
        />
        <Menu.Menu position='right'>

          <Menu.Item as = {
            NavLink
          }
          to = "/login"
          name = "Login"
          active = {
            pathname === "/login"
          }>
            <Button color="facebook">Login</Button>
          </Menu.Item>
        </Menu.Menu>
         <
        /Fragment>
      )
    } <
    /Menu>
  );
};

export default withRouter(NavBar);
