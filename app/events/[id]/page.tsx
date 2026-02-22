import data from "@/db/temp.json"
import Image from "next/image"

type eventParams = {
    params: Promise<{ id: string }>
}


const EventInfo = async({params}: eventParams, ) => {


const {id} = await params

const currEvent = data.find((event => event.uniqueId === id))

if(!currEvent) return <h1 className="text-center">Sorry this page doesn't exist...</h1>

return(

    <div className="flex h-screen justify-center items-center  relative">

      <Image
      src={currEvent!.imagePath}
      alt="Event Cover"
      width={900}
      height={400}
      className="rounded-xl absolute right-40 top-25 max-sm:hidden sm:w-70 sm:right-0 md:w-80 md:right-5 lg:w-140 2xl:w-150 "
       />
       
       <div className="mt-8  border-slate-100 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Section: Information & Pricing */}
        <div className="lg:col-span-7 flex flex-col justify-between max-sm: font-sans">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1 w-8 bg-indigo-600 rounded-full"></span>
              <h3 className="text-xl font-black uppercase tracking-widest text-white-400">
                Event Overview
              </h3>
            </div>
            
            <p className="text--700 leading-relaxed font-medium max-sm: text-sm">
              {currEvent?.description}
            </p>

            {/* Price Highlight Box */}
            <div className="relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg transition-all shadow-purple-500 hover:bg-[#eeecec] ">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Standard Admission
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">{currEvent?.ticketPrice !== '$0' ? currEvent?.ticketPrice : 'Free'}</span>
                    <span className="text-xs font-bold text-slate-400">USD</span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Interactive Schedule */}
        <div className="grid lg:col-span-5" >
          <div className="bg-purple-50/10 rounded-[2.5rem] p-8 ">
            <h3 className="text-lg font-black uppercase tracking-widest text-whiute mb-8 flex items-center gap-3">
              Event Agenda
            </h3>
            
            <div className="space-y-8">
              {currEvent?.schedule.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="text-[18px] font-mono font-bold text-black bg-indigo-50 px-2 py-1 rounded-md mb-2">
                      {item.time}
                    </div>
                    {index !== currEvent.schedule.length - 1 && (
                      <div className="w-px h-full bg-slate-200 group-hover:bg-indigo-200 transition-colors"></div>
                    )}
                  </div>
                  
                  <div className="pb-4">
                    <p className="text-sm font-bold text-[#f2e8e6] group-hover:scale-102  transition-colors leading-snug">
                      {item.activity}
                    </p>
                    {item.speaker !== "N/A" && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-5 w-5 rounded-full bg-slate-200 border border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-500">
                          {item.speaker.charAt(0)}
                        </div>
                        <span className="text-xs font-semibold text-[#d6f3f9] italic">
                          {item.speaker}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
        
)

}

export default EventInfo
   
