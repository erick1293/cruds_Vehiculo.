import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <section id='hea'>
      <header>
        <Nav activeKey="/">

          <Nav.Item>
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <NavLink to="/seccion1"> Registrar Vehiculo</NavLink>
            </Nav.Link>
          </Nav.Item>



        </Nav>
      </header>
    </section>
  )
}
