"use client"
import React, { useState } from 'react';
import './login.scss';
import { v4 } from "uuid";
import { useDispatch } from 'react-redux';
import { UPDATE_USER } from '@/redux/slice/authSlice';
import { useRouter } from 'next/navigation'

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('prefilled@gmail.com');
    const [password, setPassword] = useState('pReFiLl@123');
    let token: string | undefined = "";
    token = process.env.NEXT_PUBLIC_COOKIE_TOKEN;

    const router = useRouter();
    const dispatch = useDispatch();

    const style = {
        backgroundColor: "#17191d",
        color: "#fff",
    }

    //set cookie in the browser
    const setCookie = (name: string, value: string, days: number) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
        document.cookie = `${name}=${cookieValue}; path=/`;

        //set user in redux auth state
        dispatch(UPDATE_USER({ user: "John Doe" }))

        //attempt access after login
        router.push("/");
    };

    return (
        <div style={style} className="login-form-container">

            <h1 className='logo'>Login</h1>

            <form className="login-form">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled
                    required
                />
                <button
                    onClick={(e: React.FormEvent) => {
                        e.preventDefault();
                        setCookie(token ?? "", v4(), 7);
                    }}
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;