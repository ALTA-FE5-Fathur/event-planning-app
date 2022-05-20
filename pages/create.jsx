import { useState, useEffect } from "react"
import HeadApp from "../components/HeadApp";

function CreateEvent() {
    const [fields, setFields] = useState({
        name: '',
        date_start: '',
        date_end: '',
        location: '',
        details: '',
        ticket: '',
        category_id: 0,
        file: '',
        hosted_by: '',
        price: 0
    });

    const [categories, setCategories] = useState([]);

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


    const createHandler = () => {
        let formData = new FormData();

    }

    const fieldHandler = (e) => {
        const dataName = e.target.getAttribute('name');

        setFields({
            ...fields,
            [dataName]: e.target.value
        });

        console.log(fields);
    }

    return (
        <>
        <HeadApp title='Create' />
            <div className='container mx-auto px-5 lg:px-36 xl:px-56 2xl:px-80'>
                <h2 className="text-4xl font-bold mb-5 text-slate-700">Create Event</h2>

                <form onSubmit={createHandler.bind(this)}>
                    <label htmlFor="name">Event Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="input-create" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="price">Tiket Price</label>
                    <input type="number" name="price" id="price" placeholder="Price" className="input-create" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="ticet">Quantity</label>
                    <input type="number" name="ticket" id="ticket" placeholder="Quantity" className="input-create" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="date_start">Start</label>
                    <div className="w-60">
                        <input type='datetime-local' name="date_start" id="date_start" className="input-create" onChange={fieldHandler.bind(this)} />
                    </div>

                    <label htmlFor="date_end">End</label>
                    <div className="w-60">
                        <input type="datetime-local" name="date_end" id="date_end" className="input-create" onChange={fieldHandler.bind(this)} />
                    </div>

                    <label htmlFor="category">Category</label>
                    <div className="flex">
                        <div className="w-60">
                            <select name="category_id" className="form-select input-create" aria-label="Default select example" defaultValue={'DEFAULT'} onChange={fieldHandler.bind(this)} >
                                <option value="DEFAULT" disabled>Open this select menu</option>
                                {categories.map((el, i) => (
                                    <option key={i} value={el.Name} className="capitalize">{el.Name.charAt(0).toUpperCase() + el.Name.slice(1)}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Location" className="input-create" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="hosted_by">Host</label>
                    <input type="text" name="hosted_by" id="hosted_by" placeholder="Host" className="input-create" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="formFile">Image</label>
                    <input type="file" name="file" id="file" className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-slate-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none my-2" accept="image/png, image/jpeg" onChange={fieldHandler.bind(this)} />

                    <label htmlFor="details">Description</label>
                    <textarea name="details" id="details" cols="30" rows="5" className="border w-full border-slate-400 rounded-xl my-2 px-4 py-0.5" placeholder="Description..." onChange={fieldHandler.bind(this)}></textarea>

                    <div className="flex justify-end">
                        <button className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateEvent