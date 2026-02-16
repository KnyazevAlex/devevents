type scheduleAlias = {time: string, activity: string, speaker: string}

type EventInformation = {
    imagePath: string,
    location : string,
    name: string,
    date: string,
    time: string
    uniqueId:string
    ticketPrice?: string
    description?:string
    schedule?: scheduleAlias[]
}
export default EventInformation