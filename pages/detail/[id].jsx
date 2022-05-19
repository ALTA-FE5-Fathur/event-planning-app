import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';

function Detail() {
    const [posts, setPosts] = useState([]);

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
        }
        fetchData()
            .catch(console.error)

    }, [id]);

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
                        <button className="btn-primary w-full">Buy Ticket</button>
                    </div>
                </div>
            </div>
            <hr className="my-5" />

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