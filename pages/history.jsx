import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import HeadApp from '../components/HeadApp';

function History() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('http://54.179.1.246:8100/events/orders', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const dataPosts = await res.json();

      setPosts(dataPosts.data);
    }
    fetchData()
      .catch(console.error)
  }, [posts]);

  return (
    <>
      <div className='container mx-auto mb-10'>
        <HeadApp title="History" />
        {posts.map((el, i) => (
          <div key={i}>
            <div className="grid grid-cols-2 my-5">
              <div className='ml-auto mr-6'>
                <Image src={el.event.image} width={450} height={225} />
              </div>
              <div className='my-auto lg:px-24'>
                <div className='flex justify-between mb-8'>
                  <h1>Order ID:</h1>
                  <h1 className='font-semibold'>{el.order_id}</h1>
                </div>
                <h1 className='font-semibold text-xl capitalize'>{el.event.name}</h1>
                <h1 className='font-bold text-xl'>Rp{el.total}</h1>
                <div className='flex justify-between mt-8'>
                  <h1>Status Pembayaran</h1>
                  <h1 className='capitalize'>{el.status}</h1>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default History