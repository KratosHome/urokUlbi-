import React, { useContext } from 'react';
import Maybutton from '../UI/Button/MayButton';
import MyInput from '../UI/Input/MyInput';
import { AuthContext } from '../context/index';

const Login = () => {
    const { isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='add login' />
                <MyInput type="password" placeholder='add pass' />
                <Maybutton >enter</Maybutton>
            </form>
        </div>
    );
}

export default Login;
