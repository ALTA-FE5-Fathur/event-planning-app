import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Login() {
    const [fields, setFields] = useState({
        username: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const router = useRouter();

    const loginHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true)

        const res = await fetch('http://54.179.1.246:8100/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        });

        if (!res.ok) {
            setMessage('Username atau Password salah');
            return setIsLoading(false);
        }

        const dataLogin = await res.json();

        localStorage.setItem('token', dataLogin.data.token);


        setIsLoading(false);

        router.push('/');
    }

    const fieldHandler = (e) => {
        const dataName = e.target.getAttribute('name');

        setFields({
            ...fields,
            [dataName]: e.target.value
        });
    }

    return (
        <>
            <div className='container mx-auto px-12 sm:px-24 md:px-[180px] lg:px-[320px] xl:px-[440px] 2xl:px-[550px]'>
                {message && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{message}</span>
                </div>}
                <div className='text-center mb-5 mt-24'>
                    <Image src="/logo-full.png" width={300} height={125} />
                </div>
                <form onSubmit={loginHandler.bind(this)}>
                    <input name='username' type="text" className='input-create' placeholder='Username' onChange={fieldHandler.bind(this)} />
                    <input name='password' type="Password" className='input-create' placeholder='Password' onChange={fieldHandler.bind(this)} />
                    <div className='flex justify-end'>
                        <button type='submit' className='btn-primary w-full mb-5 disabled:bg-teal-300 disabled:text-slate-50' disabled={isLoading}>Login</button>
                    </div>
                </form>
                <h3 className='text-center text-slate-400'>Baru di TiketKita? <span className='font-bold text-teal-400 cursor-pointer' onClick={() => {
                    router.push('/register')
                }}>Daftar</span></h3>
            </div>
        </>
    )
}

export default Login;