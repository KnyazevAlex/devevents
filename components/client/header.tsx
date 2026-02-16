'use client';

import Link from "next/link"
import posthog from 'posthog-js'

const Header = () => {
    const handleLogoClick = () => {
        posthog.capture('logo_clicked');
    };

    const handleAboutClick = () => {
        posthog.capture('about_link_clicked');
    };

    const handleMyAccountClick = () => {
        posthog.capture('my_account_clicked');
    };

    return(

        <header className="sticky top-0 flex bg-purple-900/30 z-100 items-center ">
           <Link className="text-4xl py-4 mx-20 max-sm:text-lg max-sm:mx-2"
                 href={"/"}
                 onClick={handleLogoClick} >
                 DevEvents
           </Link>
            <div className="max-sm:text-sm">
           <Link href={'/about'} className="absolute right-60 top-6 max-sm:right-40" onClick={handleAboutClick}>About</Link>
           <Link href={'/about'} className="absolute right-10 top-6" onClick={handleMyAccountClick}>My account</Link>
           </div>
        </header>
    )
}
export default Header