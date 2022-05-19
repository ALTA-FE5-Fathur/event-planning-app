import React, { useState } from 'react';

import Image from 'next/image'
import { useRouter } from 'next/router';

function Register() {
    const router = useRouter();
    const [fields, setFields] = useState({
        username: "",
        name: "",
        email: "",
        hp: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const registerHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true)

        const res = await fetch('http://54.179.1.246:8100/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            setMessage("Username atau E-mail sudah terpakai")
            return setIsLoading(false);
        };

        setIsLoading(false);
        router.push('/');

    }

    const fieldHandler = (e) => {
        const dataName = e.target.getAttribute('name');

        setFields({
            ...fields, // jika [dataName] saja, data yang masuk hanya yg update (username/password/email/lain-lain). jika ada ...fields akan menimpa yang tidak update juga
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
                <h3 className='text-center text-slate-400'>Punya akun TiketKita? <span className='font-bold text-teal-400'>Login</span></h3>

                <form onSubmit={registerHandler.bind(this)} >
                    <input name='username' type="text" className='input-create' placeholder='Username' onChange={fieldHandler.bind(this)} />
                    <input name='name' type="text" className='input-create' placeholder='Full Name' onChange={fieldHandler.bind(this)} />
                    <input name='email' type="email" className='input-create' placeholder='E-mail' onChange={fieldHandler.bind(this)} />
                    <input name='hp' type="text" className='input-create' placeholder='Phone Number' onChange={fieldHandler.bind(this)} />
                    <input name='password' type="Password" className='input-create' placeholder='Password' onChange={fieldHandler.bind(this)} />
                    <div className='flex justify-end mt-2'>
                        <button type='submit' className='btn-primary w-full mb-5 disabled:bg-teal-300 disabled:text-slate-50' disabled={isLoading}>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register