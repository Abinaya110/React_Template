import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
      
           <div className="shrink-0 mr-4">
            {/* Logo */}
             <Link href="/" className="block" aria-label="Cruip">
              <svg className="fill-current  text-black-100" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="/Users/abinayagunasekaran/open-react-template/public/images/Logo.png" />
              </svg>
            // </Link> 
            
              {/* <img src="/images/Logo.png"></img> */}
          
          </div> 

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  //className=" hover:text-yellow-200 px-4 py-3 flex items-center text-black-100 transition duration-150 ease-in-out" 
                    className="btn text-white text-center bg-yellow-100 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" 
                className="btn text-white text-center bg-yellow-100 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
