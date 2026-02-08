import Card from "@/components/client/card"
import NavBar from "@/components/client/sideNav"
import EventType from '@/types/eventInfo'
import data from "@/db/temp.json"
import { Inter } from "next/font/google"

const inter = Inter({subsets: ["latin"]})

const Page =  () => {
    return(

    <div className="flex justify-center h-full">
   
        <main className="">

            <div className={`text-center ${inter.className} my-20 font-black`}>
            <h1 className=" text-9xl max-sm:text-8xl font-black ">The only hub you need</h1>
            <h1 className=" text-8xl max-sm:text-5xl my-10">To stay on top of lates dev events</h1>
            </div>
        
        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] lg:grid-cols-3 lg:gap-40 max-sm:gap-20">
            {
            data.map((val : EventType) => 
                <Card 
                key={val.name}
                imagePath={val.imagePath}
                location={val.location}
                name={val.name}
                date={val.date}
                time={val.time}
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