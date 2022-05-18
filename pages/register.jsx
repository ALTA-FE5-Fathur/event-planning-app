import Image from 'next/image'

function Register() {
    return (
        <>
            <div className='container mx-auto px-12 sm:px-24 md:px-[180px] lg:px-[320px] xl:px-[440px] 2xl:px-[550px]'>
                <div className='text-center mb-5 mt-24'>
                    <Image src="/logo-full.png" width={300} height={125} />
                </div>
                <h3 className='text-center text-slate-400'>Punya akun TiketKita? <span className='font-bold text-teal-400'>Login</span></h3>
                <input type="text" className='input-create' placeholder='Username' />
                <input type="text" className='input-create' placeholder='Full Name' />
                <input type="email" className='input-create' placeholder='E-mail' />
                <input type="text" className='input-create' placeholder='Phone Number' />
                <input type="Password" className='input-create' placeholder='Password' />
                <div className='flex justify-end mt-2'>
                    <button className='btn-primary w-full mb-5'>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Register