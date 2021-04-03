import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo/Todo';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';


export default function Nav2(){
    return(
        <div>
            <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to ="/todo">Todo</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/todo">
                        <Todo/>
                    </Route>
                </Switch>
                <div style={{position: 'fixed', bottom: '0', width: '100%'}}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to ="/todo">Todo</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>


                
            </Router>
        </div>
    )
}