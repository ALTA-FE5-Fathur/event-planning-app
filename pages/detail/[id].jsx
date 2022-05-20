import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';

function Detail() {
    const [posts, setPosts] = useState([]);
    const [ticket, setTicket] = useState(1);
    const [eventId, setEventId] = useState();
    const payment = "gopay";
    let total = ticket * posts.price;

    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchData = async () => {
            const res = await fetch(`http://54.179.1.246:8100/events/${id}`);
            const dataPosts = await res.json();

            setPosts(dataPosts.data);
            setEventId(id);
        }
        fetchData()
            .catch(console.error)

    }, [id]);

    const handleBuy = async () => {
        const eId = parseInt(eventId);
        const bodyContent = {
            event_id: eId,
            payment_type: payment,
            total
        }

        const res = await fetch('http://54.179.1.246:8100/events/orders', {
            method: 'POST',
            body: JSON.stringify(bodyContent),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!res.ok) return console.log(res);

        const dataBuy = await res.json();

        router.push(dataBuy.data.payment_simulator);
    }

    const makeRupiah = (rupiah) => {
        let text = '' + rupiah;
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
        <div className='container mx-auto px-10'>
            <h2 className="font-bold text-xl my-3 lg:hidden">{posts.name}</h2>
            <div className="lg:grid lg:grid-cols-3">
                <div className='mb-5 lg:col-span-2'>
                    <img src={posts.image} className="w-full" />
                    <h3 className="font-bold text-xl my-3">Deskripsi</h3>
                    <p className="mb-5">{posts.details}</p>
                </div>
                <div className="lg:mx-3">
                    <div className="lg:border lg:rounded-xl lg:shadow-lg lg:px-5 lg:py-5">
                        <h2 className="font-bold text-xl my-3 hidden lg:block text-center">{posts.name}</h2>
                        <div className="flex items-center my-3">
                            <div className="w-8 mr-3">
                                <Image src='/Calendar.png' width={32} height={32} />
                            </div>
                            <h5>{moment(posts.date_start).format("DD MMM YYYY")}</h5>
                        </div>
                        <div className="flex items-center my-3">
                            <div className="w-8 mr-3">
                                <Image src='/Time.png' width={32} height={32} />
                            </div>
                            <h5>{moment(posts.date_start).format("LT")}</h5>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 mr-3">
                                <Image src="/Location.png" width={32} height={32} />
                            </div>
                            <h5 className="capitalize">{posts.location}</h5>
                        </div>
                    </div>
                    <div className="border rounded-xl p-5 shadow-lg my-5">
                        <div className="flex justify-between">
                            <h4>Tiket Price</h4>
                            <h3 className="font-bold text-lg">Rp{!posts.price ? posts.price : makeRupiah(posts.price)}</h3>
                        </div>
                        <button className="btn-primary w-full" onClick={() => {
                            const overlay = document.querySelector('#overlay');
                            overlay.classList.toggle('hidden')
                            overlay.classList.toggle('flex')
                        }}>Buy Ticket</button>
                    </div>
                </div>
            </div>
            <hr className="my-5" />

            {/* Akan muncul setelah tekan tombol Buy Tiket */}
            <div className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center" id="overlay">
                <div className="bg-gray-200 max-w-sm py-2 px-3 rounded-lg shadow-xl text-gray-800">
                    <div className="flex justify-between items-center mb-3">
                        <div />
                        <h4 className="text-lg font-bold text-center">Buy Ticket</h4>
                        <svg className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full" id="close-modal" fill="currentColor" viewBox="0 0 20 20" onClick={() => {
                            if (!localStorage.getItem("token")) {
                                return router.push('/login');
                            }
                            const overlay = document.querySelector('#overlay');
                            overlay.classList.toggle('hidden')
                            overlay.classList.toggle('flex')
                        }}>
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center w-96 mb-3">
                        <button type="button" className="border rounded-lg bg-red-500 px-5 text-slate-200 text-xl" onClick={() => {
                            let temp = ticket - 1;
                            setTicket(temp);
                        }}>-</button>
                        <input type="text" className="mx-2 w-24 text-center" value={ticket} min="1" onChange={() => {
                            total = ticket * posts.price;
                        }} />
                        <button type="button" className="border rounded-lg bg-teal-500 px-5 text-slate-200 text-xl mr-10" onClick={() => {
                            let temp = ticket + 1;
                            setTicket(temp);
                        }}>+</button>
                    </div>
                    <div className="mb-3 flex justify-between">
                        <h3>Total Harga</h3>
                        <h3 className="font-bold text-xl">Rp{ticket * posts.price}</h3>
                    </div>
                    <button className="btn-primary w-full" onClick={() => handleBuy()}>Buy</button>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-2xl my-5">Comments</h2>
                <div className="flex justify-between mb-5">
                    <Image src='/Profile.png' height={50} width={50} />
                    <textarea className="w-full ml-4 border border-slate-600"></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;

// export async function getServerSideProps({ query }) {
//     const id = query.id;

//     const res = await fetch(`http://54.179.1.246:8100/events/${id}`);
//     const dataPosts = await res.json();

//     return {
//         props: {
//             dataPosts,
//         }
//     }
// }