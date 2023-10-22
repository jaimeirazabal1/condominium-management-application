import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
      
      
        <div style={{ backgroundColor: '#A8E6A1', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', width: '300px', padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label>Username</label>
                        <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label>Password</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', width: '100%', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                        Login
                    </button>
                    <div style={{marginTop:'10px'}}>
                        <a href="/register" >Registro</a>
                    </div>
                </form>
            </div>
        </div>
     
    );
};

export default Login;