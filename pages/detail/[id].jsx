import Image from "next/image"

function Detail() {
    return (
        <div className='container mx-auto px-10'>
            <h2 className="font-bold text-xl my-3 lg:hidden">The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h2>
            <div className="lg:grid lg:grid-cols-3">
                <div className='mb-5 lg:col-span-2'>
                    <Image src="/musicgallery.jpg" width={1000} height={500} />
                    <h3 className="font-bold text-xl my-3">Deskripsi</h3>
                    <p className="mb-5">The 12th Music Gallery comes back with astonishing music performances as well as series of enthralling art exhibitions and bazaars! This year, we brought the theme "A Virtuous Harmony" which means that The 12th Music Gallery aims to collectively combine art workers and art lovers who come from different backgrounds into one, creating something good and beautiful through art.</p>
                </div>
                <div className="lg:mx-3">
                    <div className="lg:border lg:rounded-xl lg:shadow-lg lg:px-5 lg:py-5">
                        <h2 className="font-bold text-xl my-3 hidden lg:block">The 12th Music Gallery : Unity on Stage brought to you by Ternak Uang</h2>
                        <div className="flex items-center my-3">
                            <div className="w-8 mr-3">
                                <Image src='/Calendar.png' width={32} height={32} />
                            </div>
                            <h5>21 May 2021</h5>
                        </div>
                        <div className="flex items-center my-3">
                            <div className="w-8 mr-3">
                                <Image src='/Time.png' width={32} height={32} />
                            </div>
                            <h5>13.00 - 22.00</h5>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 mr-3">
                                <Image src="/Location.png" width={32} height={32} />
                            </div>
                            <h5>Kuningan City, DKI Jakarta</h5>
                        </div>
                    </div>
                    <div className="border rounded-xl p-5 shadow-lg my-5">
                        <div className="flex justify-between">
                            <h4>Tiket Price</h4>
                            <h3 className="font-bold text-lg">Rp195.000</h3>
                        </div>
                        <button className="btn-primary w-full">Buy Ticket</button>
                    </div>
                    <h3 className="font-bold text-xl">Participants: 47</h3>
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

export default Detail