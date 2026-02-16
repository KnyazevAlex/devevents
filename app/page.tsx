import Card from "@/components/client/card"
import NavBar from "@/components/client/sideNav"
import EventType from '@/types/eventInfo'
import data from "@/db/temp.json"
import { Inter } from "next/font/google"


const inter = Inter({subsets: ["latin"]})

const Page =  () => {
    return(

    <div className="flex justify-center h-full">
   
        <main>

            <div className={`text-center ${inter.className} my-20 font-black`}>
            <h1 className="text-9xl max-sm:text-8xl font-black bg-linear-to-r  from-pink-500 via-purple-500 to-cyan-400  bg-clip-text text-transparent">The only hub you need</h1>
            <h1 className=" text-8xl max-sm:text-5xl my-10">To stay on top of latest dev events</h1>
            </div>
        
        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] lg:grid-cols-3 lg:gap-40 max-sm:gap-20">
            {
            data.map((val : EventType) => 
                <Card 
                {...val}
                key={val.uniqueId}
                />
            )
            }
        </div>
        
       
        </main>

        <footer>

        </footer>
     </div>
    )
}

export default Page