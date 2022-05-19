import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function CreateEvent() {
    // const [fields, setFields] = useState({
    //     name: '',
    //     price: 0,
    //     date_start: '',
    //     date_end: '',
    //     location: '',
    //     details: '',
    //     ticket: 0,

    // });
    const [categories, setCategories] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login')
        }

        const fetchData = async () => {
            const res = await fetch('http://54.179.1.246:8100/categories');
            const dataCategories = await res.json();

            setCategories(dataCategories.data);
        }

        fetchData()
            .catch(console.error)
    }, []);

    return (
        <>
            <div className='container mx-auto px-5 lg:px-36 xl:px-56 2xl:px-80'>
                <h2 className="text-4xl font-bold mb-5 text-slate-700">Create Event</h2>
                <form>
                    <label htmlFor="eventName">Event Name</label>
                    <input type="text" name="eventName" id="eventName" placeholder="Name" className="input-create" />

                    <label htmlFor="eventName">Categories</label>
                    <div className="flex">
                        <div className="w-60">
                            <select className="form-select input-create" aria-label="Default select example" defaultValue={'DEFAULT'} onChange={(e) => console.log(e.target.value)}>
                                <option value="DEFAULT" disabled>Open this select menu</option>
                                {categories.map((el, i) => (
                                    <option key={i} value={el.Name} className="capitalize">{el.Name.charAt(0).toUpperCase() + el.Name.slice(1)}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label htmlFor="price">Tiket Price</label>
                    <div className="w-60">
                        <input type="number" name="price" id="price" placeholder="Price" className="input-create" />
                    </div>

                    <label htmlFor="quantity">Quantity</label>
                    <div className="w-60">
                        <input type="number" name="quantity" id="quantity" placeholder="Quantity" className="input-create" />
                    </div>

                    <label htmlFor="dateStart">Start</label>
                    <div className="w-60">
                        <input type="datetime-local" name="dateStart" id="dateStart" className="input-create" />
                    </div>

                    <label htmlFor="dateEnd">End</label>
                    <div className="w-60">
                        <input type="datetime-local" name="dateEnd" id="dateEnd" className="input-create" />
                    </div>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Location" className="input-create" />

                    <label htmlFor="formFile">Image (.png)</label>
                    <input type="file" name="formFile" id="formFile" className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-slate-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none my-2" accept="image/png" />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="5" className="border w-full border-slate-400 rounded-xl my-2 px-4 py-0.5" placeholder="Description..."></textarea>

                    <div className="flex justify-end mb-8">
                        <button className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateEvent