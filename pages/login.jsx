import Image from 'next/image';

function Login() {
    return (
        <>
            <div className='container mx-auto px-12 sm:px-24 md:px-[180px] lg:px-[320px] xl:px-[440px] 2xl:px-[550px]'>
                <div className='text-center mb-5 mt-24'>
                    <Image src="/logo-full.png" width={300} height={125} />
                </div>
                <input type="text" className='input-create' placeholder='Username' />
                <input type="Password" className='input-create' placeholder='Password' />
                <div className='flex justify-end'>
                    <button className='btn-primary w-full mb-5'>Login</button>
                </div>
                <h3 className='text-center text-slate-400'>Baru di TiketKita? <span className='font-bold text-teal-400'>Daftar</span></h3>
            </div>
        </>
    )
}

export default Login;