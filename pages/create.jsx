function CreateEvent() {
    return (
        <>
            <div className='container mx-auto px-5 lg:px-36 xl:px-56 2xl:px-80'>
                <label htmlFor="eventName">Event Name</label>
                <input type="text" name="eventName" id="eventName" placeholder="Name" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />

                <label htmlFor="price">Tiket Price</label>
                <input type="number" name="price" id="price" placeholder="Price" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />

                <label htmlFor="dateStart">Start</label>
                <div className="flex">
                    <input type="date" name="dateStart" id="dateStart" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />
                    <h3 className="mx-3"> - </h3>
                    <input type="time" name="dateStart" id="dateStart" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />
                </div>

                <label htmlFor="dateEnd">End</label>
                <div className="flex">
                    <input type="date" name="dateEnd" id="dateEnd" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />
                    <h3 className="mx-3"> - </h3>
                    <input type="time" name="dateEnd" id="dateEnd" className="px-5 border border-slate-400 rounded-xl w-full my-2 py-0.5" />
                </div>

                <label htmlFor="formFile">Image</label>
                <input type="file" name="formFile" id="formFile" className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-slate-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none my-2" accept="image/png, image/jpeg" />

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="5" className="border w-full border-slate-400 rounded-xl my-2 px-4 py-0.5" placeholder="Description..."></textarea>

                <div className="flex justify-end">
                    <button className="btn-primary">Submit</button>
                </div>
            </div>
        </>
    )
}

export default CreateEvent