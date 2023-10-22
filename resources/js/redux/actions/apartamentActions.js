import { GETALL_SUCCESS, GETALL_FAIL } from './types';
import {URL_API} from '../../config'

export const getAll = () => {
    return async (dispatch) => {
        const response = await fetch(`${URL_API}/apartaments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        const data = await response.json();
        console.log('data',data)
        if (data) {
            dispatch({
                type: GETALL_SUCCESS,
                payload: data.map( apartament => apartament.number)
            });
        } else {
            // Maneja el error de login
            console.error('GETALL_FAIL failed');
            dispatch({
                type: GETALL_FAIL
            });
        }
    }
};
