'use client';

import Link from "next/link"
import Image from "next/image"
import eventType from '@/types/eventInfo'
import posthog from 'posthog-js'

const Card = (info : eventType ) => {
    const handleCardClick = () => {
        posthog.capture('event_card_clicked', {
            event_id: info.uniqueId,
            event_name: info.name,
            event_location: info.location,
            event_date: info.date,
            ticket_price: info.ticketPrice,
        });
    };

    return (

        <Link
        className="w-75 h-70 hover:animate-pulse hover: cursor-pointer my- sm:w-50 sm:h-75 md:w-60 md:h-75 2xl:scale-125 xl:scale-90 lg:scale-90  lg:w-100 lg:h-85 bg-slate-500/40  backdrop-blur-md rounded-xl "
        data-eventid={info.uniqueId}
        href={`/events/${info.uniqueId}`}
        onClick={handleCardClick}
        >
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
        </Link>
        
        
    )
}
export default Card