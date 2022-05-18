import React, { useState } from 'react';
import Image from 'next/image';

function Login() {
    const [fields, setFields] = useState({
        username: "",
        password: ""
    });

    const loginHandler = async (e) => {
        
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
                <div className='text-center mb-5 mt-24'>
                    <Image src="/logo-full.png" width={300} height={125} />
                </div>
                <form onSubmit={loginHandler.bind(this)}>
                    <input name='username' type="text" className='input-create' placeholder='Username' onChange={fieldHandler.bind(this)} />
                    <input name='password' type="Password" className='input-create' placeholder='Password' onChange={fieldHandler.bind(this)} />
                    <div className='flex justify-end'>
                        <button type='submit' className='btn-primary w-full mb-5'>Login</button>
                    </div>
                </form>
                <h3 className='text-center text-slate-400'>Baru di TiketKita? <span className='font-bold text-teal-400'>Daftar</span></h3>
            </div>
        </>
    )
}

export default Login;