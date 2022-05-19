import Image from "next/image";
import Link from "next/link";

function NavbarComponent() {

  return (
    <>
      <div className='container mx-auto my-3'>
        <div className='flex items-center justify-between relative'>
          <div className="lg:hidden" >
            <Link href='/' passHref>
              <a>
                <Image src='/logo.png' height={50} width={50} className="cursor-pointer lg:hidden" />
              </a>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Link href='/' passHref>
              <a>
                <Image src='/logo-full.png' height={50} width={127} className="cursor-pointer" />
              </a>
            </Link>
          </div>
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