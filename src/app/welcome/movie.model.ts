export interface Movie {
    title : string;
    description : string;
    genre : string;
    duration : number;
    director : string;
    actors : string[];
    releaseDate : Date;
    screeningDate : Date;
    screeningTimes : Map<Date, number>;
    ticketPrice : number;
    status? : 'reserved' | 'watched' | 'cancelled' | null;
    rating? : number;
    imageUrl?: string;
}