import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>Campaign Request</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home
              </NavItem>
                        </LinkContainer>
            <LinkContainer to={'/form'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> ADO Form
              </NavItem>
                        </LinkContainer>
                       
                     

                        <LinkContainer to={'/bootstrapForm'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> ADO Form v1
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/listForm'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> ListForm
              </NavItem>
                        </LinkContainer>
                     
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
/*    <LinkContainer to={'/listForm'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> ListForm
              </NavItem>
                        </LinkContainer>


  <LinkContainer to={'/search'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Search
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/bot'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Bot
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/analyticsQandA'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Analytics Q&A
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/analyticsRequest'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Analytics Request
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/workFlow'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Campaign List Delivery
              </NavItem>
                        </LinkContainer>*/