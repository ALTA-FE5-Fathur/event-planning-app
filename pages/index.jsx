import HeadApp from '../components/HeadApp';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <HeadApp title="Home" />

        {/* Dekstop */}
        <div>
          <div className='px-10 my-5 lg:flex justify-evenly items-center hidden'>
            <div className='w-96 mr-10'>
              <Image src='/musicgallery.jpg' width={450} height={225} />
            </div>
            <div>
              <h3 className='font-bold text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <hr className='hidden lg:block' />
          <div className='px-10 my-5 lg:flex justify-evenly items-center hidden'>
            <div className='w-96 mr-10'>
              <Image src='/musicgallery.jpg' width={450} height={225} />
            </div>
            <div>
              <h3 className='font-bold text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <hr className='hidden lg:block' />
          <div className='px-10 my-5 lg:flex justify-evenly items-center hidden'>
            <div className='w-96 mr-10'>
              <Image src='/musicgallery.jpg' width={450} height={225} />
            </div>
            <div>
              <h3 className='font-bold text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <hr className='hidden lg:block' />
          <div className='px-10 my-5 lg:flex justify-evenly items-center hidden'>
            <div className='w-96 mr-10'>
              <Image src='/musicgallery.jpg' width={450} height={225} />
            </div>
            <div>
              <h3 className='font-bold text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <hr className='hidden lg:block' />
          
        </div>

        {/* Mobile Device */}
        <div className='px-5 sm:flex sm:flex-wrap sm:justify-center lg:hidden'>
          <div className='rounded-xl shadow-lg overflow-hidden mb-5 max-w-[28rem] sm:w-[18rem] mx-auto'>
            <Image src='/musicgallery.jpg' width={450} height={225} />
            <div className='px-5 py-3'>
              <h3 className='font-bold text-center text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500 text-center'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <div className='rounded-xl shadow-lg overflow-hidden mb-5 max-w-[28rem] sm:w-[18rem] mx-auto'>
            <Image src='/musicgallery.jpg' width={450} height={225} />
            <div className='px-5 py-3'>
              <h3 className='font-bold text-center text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500 text-center'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <div className='rounded-xl shadow-lg overflow-hidden mb-5 max-w-[28rem] sm:w-[18rem] mx-auto'>
            <Image src='/musicgallery.jpg' width={450} height={225} />
            <div className='px-5 py-3'>
              <h3 className='font-bold text-center text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500 text-center'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          <div className='rounded-xl shadow-lg overflow-hidden mb-5 max-w-[28rem] sm:w-[18rem] mx-auto'>
            <Image src='/musicgallery.jpg' width={450} height={225} />
            <div className='px-5 py-3'>
              <h3 className='font-bold text-center text-lg'>The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h3>
              <h4 className='text-md font-semibold text-slate-500 text-center'>21 May 2022  -  BSO Band FEB UI</h4>
              <h3 className='font-bold text-2xl text-right'>Rp195.000</h3>
            </div>
          </div>
          

        </div>

        <div className='my-6 flex justify-center'>
          <button className='btn-primary mx-2'>Lihat Semua</button>
        </div>
      </div>
      <div className='bg-teal-600 h-72 mb-10 flex justify-center'>
        <div className='overflow-hidden'>
          <Image src='/bingung.png' height={500} width={250} />
        </div>
        <div className='text-slate-200 my-auto w-[500px]'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Bingung caranya buat Event?</h2>
          <h2 className='text-xl lg:text-4xl font-bold'>Kunjungi web TiketKita.</h2>
          <p>Ayo bergabung bersama kami dan buatlah event menarik di TiketKita. Mulai dari pengadaan event, pengembangan event secara profesional, hingga pemasaran dan penjualan tiket.</p>
          <button className='bg-orange-600 hover:bg-orange-500 text-slate-200 rounded-md py-1 px-3 my-2 transition-all'>Buat Event</button>
        </div>
      </div>
    </>
  )
}
