import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login({ loginClicked }) {
    return (
        <div className='login_form '>
            <Form className='shadow'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => loginClicked(true)}>
                    <Link to="/home">Submit</Link>
                </Button>
            </Form>
        </div>
    )
}

export default Login