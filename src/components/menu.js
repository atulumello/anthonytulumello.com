import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{position: 'absolute', width: '100%', top: '0', left: '0', zIndex: '99999', padding: '0 20px'}}>
      <Navbar expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact Me</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/atulumello">GitHub</NavLink>
            </NavItem> */}
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;