import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaUserAlt, FaShoppingCart, FaCog, FaHome, FaSun, FaDoorOpen, FaMoon } from "react-icons/fa";
import { Auth } from "../../App";
import { Link } from "react-router-dom";

function Header({ changeTheme, setLoadLogin, setAuth, shouldLoginLoad }) {
    const [theme, setTheme] = React.useState("light")

    const setCurrentTheme = (theme) => {
        setTheme(theme)
        changeTheme(theme)

    }
    return (
        <Auth.Consumer>
            {
                (isLoggedIn) => {

                    return (

                        <Navbar>
                            <Container fluid>
                                <Navbar.Brand>
                                    <img src={logo} alt="" />
                                    <p>
                                        Pooja Shop
                                    </p>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav>
                                        <FaUserAlt />
                                        <span>Hi, Nikita</span>
                                        {
                                            isLoggedIn ?
                                                <>
                                                    <Link to="/home">
                                                        <FaHome />
                                                    </Link>
                                                    <Link to="/cart"><FaShoppingCart /> </Link>
                                                </>
                                                :
                                                null
                                        }
                                        <FaCog />
                                        <NavDropdown title="" id="navbarScrollingDropdown">
                                            <NavDropdown.Item >
                                                {
                                                    theme == "dark" ?
                                                        <FaMoon onClick={() => setCurrentTheme("light")} />
                                                        :
                                                        <FaSun onClick={() => setCurrentTheme("dark")} />
                                                }
                                                {theme == "dark" ? "Dark" : "Light"} Theme
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item>
                                                <FaDoorOpen />
                                                {
                                                    shouldLoginLoad ?
                                                        <Link to="/" onClick={() => (setLoadLogin(false), setAuth(false))}> {isLoggedIn ? "Logout" : "Cancel"}</Link>
                                                        : <Link to="/login" onClick={() => (setLoadLogin(true), setAuth(false))}>Login</Link>
                                                }
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    )
                }
            }
        </Auth.Consumer>


    )
}

export default Header