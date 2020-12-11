import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from '../../firebase';
import {actionTypes} from '../../reducer';
import { useStateValue } from '../../StateProvider';


const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <img
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k1GZiULqC-enIxWAptfRZwHaHa%26pid%3DApi&f=1'
                    alt=''
                />
                <div className='login_text'>
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
