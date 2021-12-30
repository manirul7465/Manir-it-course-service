
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../Hooks/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token}=useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://pure-escarpment-40758.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    alert('added succesfully');
                }
                
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin here</h1>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} type="email" placeholder='Input admin email'/>
                <button type="submit" style={{ marginLeft: "5px", borderRadius: "20px", backgroundColor: "burlywood" }}>make admin</button>
            </form>
            {success && <Alert variant='primary'>
                MakeAdmin succesfully!
            </Alert>}
        </div>
    );
};

export default MakeAdmin;