import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const myNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg'>
        <LinkContainer
          className='logo'
          to='/'
          style={{ color: '#FFFAF0', fontSize: '32px' }}
        >
          <Navbar.Brand>Tadej Ferk</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer
              className='links'
              style={{ color: '#FFFAF0' }}
              to='/'
            >
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer
              className='links'
              style={{ color: '#FFFAF0' }}
              to='/about'
            >
              <Nav.Link>About me</Nav.Link>
            </LinkContainer>
            <LinkContainer
              className='links'
              style={{ color: '#FFFAF0' }}
              to='/projects'
            >
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default myNavbar
