import Image from "next/image"
import eventType from '../../types/eventInfo'

const Card = (info : eventType ) => {
    return (
        
        <div className="w-75 h-70 hover:animate-pulse hover: cursor-pointer my- sm:w-50 sm:h-75 md:w-60 md:h-75 2xl:scale-125 xl:scale-90 lg:scale-90  lg:w-100 lg:h-85 bg-slate-700/50  backdrop-blur-md rounded-xl ">
            <Image 
            className="rounded-xl"
            src={info.imagePath}
            width={510}
            height={400}
            alt="DevEvent Image cover"
            />

            <p>{info.location}</p>

            <h3>{info.name}</h3>
            
            <h4> <p>{`${info.date} | ${info.time}`}</p></h4>
        </div>
        
        
    )
}
export default Card