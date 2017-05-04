import React from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' id='main'>
                            CRUD Monster
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}
