import Link from "next/link"

const Header = () => {
    return(
        
        <header className="sticky top-0 flex bg-purple-900/30 z-100 items-center ">
           <p className="text-4xl py-4 mx-20">DevCom </p>
           <Link href={'/about'} className="absolute right-60">About</Link>
           <Link href={'/about'} className="absolute right-25">My account</Link>
        </header>
    )
}
export default Header