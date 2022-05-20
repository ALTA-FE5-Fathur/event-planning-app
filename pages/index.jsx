import HeadApp from '../components/HeadApp';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function Home() {
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://54.179.1.246:8100/events');
      const dataPosts = await res.json();

      setPosts(dataPosts.data);
    }

    fetchData()
      .catch(console.error)

  }, []);

  const makeRupiah = (rupiah) => {
    let text = rupiah.toString();
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
      result += text[i];
      if (i % 3 === 0 && i !== 0) {
        result += '.';
      }
    }
    return result.split("").reverse().join("");
  }

  return (
    <>
      <div className='container mx-auto'>
        <HeadApp title="Home" />

        {/* Dekstop */}
        {posts.map((el, i) => (
          <div key={i}>
            {/* <div className='px-10 my-5 lg:flex justify-evenly items-center hidden'>
              <div className='w-96 mr-10'>
                <Image src={el.image} width={450} height={225} />
              </div>
              <div>
                <Link href={`/detail/${el.id}`}>
                  <h3 className='font-bold text-2xl capitalize cursor-pointer'>{el.name}</h3>
                </Link>
                <h4 className='text-md font-semibold text-slate-500 capitalize'>{moment(el.date_start).format("DD MMM YYYY")}  -  {el.location}</h4>
                <h3 className='font-bold text-2xl text-right'>Rp{makeRupiah(el.price)}</h3>
              </div>
            </div>
            <hr className='hidden lg:block' /> */}

            <div className='px-10 my-5 lg:grid lg:grid-cols-2 hidden'>
              <div className='w-96 mr-10'>
                <Image src={el.image} width={450} height={225} />
              </div>
              <div className='my-auto'>
                <Link href={`/detail/${el.id}`}>
                  <h3 className='font-bold text-2xl capitalize cursor-pointer'>{el.name}</h3>
                </Link>
                <h4 className='text-md font-semibold text-slate-500 capitalize'>{moment(el.date_start).format("DD MMM YYYY")}  -  {el.location}</h4>
                <h3 className='font-bold text-2xl text-right'>Rp{makeRupiah(el.price)}</h3>
              </div>
            </div>
            <hr className='hidden lg:block' />


            {/* Mobile Device */}
            <div className='px-5 sm:flex sm:flex-wrap sm:justify-center lg:hidden'>
              <Link href={`/detail/${el.id}`}>
                <div className='rounded-xl shadow-lg overflow-hidden mb-5 max-w-[28rem] sm:w-[18rem] mx-auto cursor-pointer'>
                  <Image src={el.image} width={450} height={225} />
                  <div className='px-5 py-3'>
                    <h3 className='font-bold text-center text-lg capitalize'>{el.name}</h3>
                    <h4 className='text-md font-semibold text-slate-500 text-center'>{moment(el.date_start).format("DD MMM YYYY")}  -  {el.location}</h4>
                    <h3 className='font-bold text-2xl text-right'>Rp{makeRupiah(el.price)}</h3>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        ))}

        {/* <div className='my-6 flex justify-center'>
          <button className='btn-primary mx-2'>Lihat Semua</button>
        </div> */}
      </div>
      <div className='bg-teal-600 h-72 mb-10 flex justify-center'>
        <div className='overflow-hidden'>
          <Image src='/bingung.png' height={500} width={250} />
        </div>
        <div className='text-slate-200 my-auto w-[500px]'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Bingung caranya buat Event?</h2>
          <h2 className='text-xl lg:text-4xl font-bold'>Kunjungi web TiketKita.</h2>
          <p>Ayo bergabung bersama kami dan buatlah event menarik di TiketKita. Mulai dari pengadaan event, pengembangan event secara profesional, hingga pemasaran dan penjualan tiket.</p>
          <button className='bg-orange-600 hover:bg-orange-500 text-slate-200 rounded-md py-1 px-3 my-2 transition-all' onClick={() => {
            router.push('/create')
          }}>Buat Event</button>
        </div>
      </div>
    </>
  )
}
