// resources/js/components/Register.jsx

import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.success) {
            console.log('Registro exitoso');
        } else {
            console.error('Error de registro:', data.error);
        }
    };

    return (
     
        <div style={{ backgroundColor: '#A8E6A1', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', width: '300px', padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>Registro</h2>
                <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                        <label>Nombre</label>
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label>Email</label>
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label>Password</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', width: '100%', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                    Register
                    </button>
                    <div style={{marginTop:'10px'}}>
                        <a href="/login" >Login</a>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Register;
