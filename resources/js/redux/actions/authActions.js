import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import {URL_API} from '../../config'
export const login = ({email, password}) => {
    return async (dispatch) => {
        const response = await fetch(`${URL_API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.access_token) {
            // Guarda el token JWT en el almacenamiento local o en las cookies, según lo prefieras
            localStorage.setItem('token', data.access_token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: email
            });
        } else {
            // Maneja el error de login
            console.error('Login failed');
            dispatch({
                type: LOGIN_FAIL
            });
        }
    }
};
