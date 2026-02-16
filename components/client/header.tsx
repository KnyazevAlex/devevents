import Link from "next/link"

const Header = () => {
    return(
        
        <header className="sticky top-0 flex bg-purple-900/30 z-100 items-center ">
           <Link className="text-4xl py-4 mx-20 max-sm:text-lg max-sm:mx-2"
                 href={"/"} >
                 DevEvents 
           </Link>
            <div className="max-sm:text-sm">
           <Link href={'/about'} className="absolute right-60 top-6 max-sm:right-40">About</Link>
           <Link href={'/about'} className="absolute right-10 top-6">My account</Link>
           </div>
        </header>
    )
}
export default Header