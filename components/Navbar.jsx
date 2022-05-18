import Image from "next/image"

function NavbarComponent() {
  return (
    <>
      <div className='container mx-auto my-3'>
        <div className='flex items-center justify-between relative'>
          <Image src='/logo.png' height={50} width={50} className="cursor-pointer lg:hidden" />
          <div className="grow flex mx-3">
            <input type="text" className="border rounded-full pl-2 w-full grow" placeholder="Search" />
            <input type="text" className="border rounded-full pl-2 mx-3 w-96 hidden lg:inline" placeholder="Location" />
            <button className="btn-primary mx-2">Search</button>
          </div>
          <Image src='/Profile.png' height={50} width={50} className="cursor-pointer" />
        </div>
      </div>
      <div className="bg-teal-600 h-7 mb-5 "></div>
    </>
  )
}

export default NavbarComponent;