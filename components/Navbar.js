import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Navbarcom.module.css';
import { FiPlusCircle } from 'react-icons/fi'
import { BsPersonFill, BsSpeedometer2 } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
const Navbarcom = () => {
    return (
        <header className={styles.header}>
        <Container>
            <div className={styles.lang}>
                <Image 
                src='/../public/icons8-united-arab-emirates-48.png' width='30px' height='30px' alt='UAE'/>
                <div className={styles.lang}><i><AiOutlineGlobal /></i> Arabic</div>
            </div>
            <Navbar className={styles.navBar}  expand="lg">
                    <Link href='/' className={styles.navLogo}><a>LinkiCar</a></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="New cars" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            title="Used cars" 
                            id="nav-dropdown-dark-example" 
                            style={{color: '#00263C'}}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1" style={{color: '#00263C'}}>Showrooms</Nav.Link>
                        <Nav.Link href="#action2" style={{color: '#00263C'}}>Offers</Nav.Link>
                        <Nav.Link href="#action2" style={{color: '#00263C'}}>Plates</Nav.Link>
                        <Nav.Link href="#action2" style={{color: '#00263C'}}>News</Nav.Link>
                        <Nav.Link href="#action2" style={{color: '#00263C'}}>Salvage cars</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <div className={styles.iconBtn}>
                        <i><BsSpeedometer2 className={styles.speed} /></i>
                        <button variant="contained" className={styles.btnNav}><FiPlusCircle /> New AD</button>
                        <i><BsPersonFill className={styles.avatar} /></i>
                    </div>
                    </Navbar.Collapse>
                    </Navbar>
                    </Container>
        </header>
    )
}


export default Navbarcom