import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
       <>
                {/* This is hader Nabbar */}
            <Nav>
                {/* This is nav container */}
                <NavbarContainer>
                    {/* This is logo section, menu, and mobile icon section */}
                    <NavLogo to ='/' > Brainbox </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon >
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="singup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </>
    );
};

export default Navbar
