import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        history.push(`/coffee`)
                        onLogin(user)
                    })
                } else {
                    r.json().then(data => setErrors(data.error))
                }
            })
    }

    return (
        <div style={{ margin: '100px', width: '80%' }}>
            <h1>Welcome to APPNAME!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username..."
                        value={username}
                        onChange={e => setUsername(e.target.value)}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <p>Don't have an account yet? <a href='/signup'>Create an account here!</a></p>
            </Form>
            {errors &&
                <div>
                    <h1 style={{ margin: '100px auto 0 auto', textAlign: 'center', color: 'red' }}>{errors}</h1>
                </div>}
        </div>
    )
}

export default LoginPage