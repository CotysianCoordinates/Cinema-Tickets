import { Injectable } from "@angular/core";
import { Review } from "./review.model";

@Injectable()
export class ReviewService{
    private reviews : Review[] = [
        {
          "title": "Skyward Bound",
          "firstName": "Ava",
          "lastName": "Jenkins",
          "rating": 9,
          "text": "Absolutely stunning visuals! I wanted to live in that steampunk world. Also, someone get me Leo Cross' jacket, please and thank you."
        },
        {
          "title": "Skyward Bound",
          "firstName": "Mason",
          "lastName": "Nguyen",
          "rating": 7,
          "text": "Solid adventure vibes. Some parts dragged a bit, but the airships alone deserve an Oscar. Or at least a shiny sticker."
        },
        {
          "title": "Shadows of Yesterday",
          "firstName": "Olivia",
          "lastName": "Banks",
          "rating": 8,
          "text": "Bring tissues. Buckets of them. I cried so much, I think the guy next to me offered me his popcorn out of pity."
        },
        {
          "title": "Circuit Breaker",
          "firstName": "Liam",
          "lastName": "Patel",
          "rating": 6,
          "text": "It was like hacking in real life, except actually exciting. Could’ve used fewer scenes of people typing furiously while dramatic music played, though."
        },
        {
          "title": "Whiskered Warriors",
          "firstName": "Sophia",
          "lastName": "Miller",
          "rating": 10,
          "text": "CATS. IN ARMOR. ON A QUEST. This is peak cinema. I laughed, I cried, I considered adopting five cats immediately after."
        },
        {
          "title": "Neon Wasteland",
          "firstName": "Jackson",
          "lastName": "Perez",
          "rating": 8,
          "text": "Blade Runner vibes but with extra sass. Nova Reyes is officially my new favorite anti-hero. Someone get her a coffee, she's been through enough."
        },
        {
          "title": "Neon Wasteland",
          "firstName": "Emma",
          "lastName": "Carter",
          "rating": 7,
          "text": "Cool world-building but I had no idea what was happening half the time. Still, 10/10 for the neon trench coats alone."
        },
        {
          "title": "Haunting Echoes",
          "firstName": "Noah",
          "lastName": "Foster",
          "rating": 5,
          "text": "Got spooked so bad I spilled my nachos. Movie was decent, but honestly, the real horror was my dry cleaning bill."
        },
        {
          "title": "Velvet Strings",
          "firstName": "Isabella",
          "lastName": "Reed",
          "rating": 9,
          "text": "This movie hit all the right notes (pun intended). The violin solos? *Chef’s kiss.* Gonna go cry into my music playlist now."
        },
        {
          "title": "Cursed Sands",
          "firstName": "Ethan",
          "lastName": "Kim",
          "rating": 7,
          "text": "Think Indiana Jones but with way more sand... and slightly worse decisions. Still, a fun ride if you don't mind yelling 'DON'T TOUCH THAT!' at the screen."
        },
        {
          "title": "Breaking the Ice",
          "firstName": "Lily",
          "lastName": "Turner",
          "rating": 8,
          "text": "I knew nothing about curling before this, and now I want to join a team immediately. Hilarious and surprisingly heartwarming!"
        },
        {
          "title": "Kingdoms Rise",
          "firstName": "James",
          "lastName": "Hall",
          "rating": 9,
          "text": "An epic with a capital E. Dragons, magic, betrayals... Honestly, I was ready to grab a sword and pledge allegiance by the end."
        },
        {
          "title": "Kingdoms Rise",
          "firstName": "Grace",
          "lastName": "Shaw",
          "rating": 10,
          "text": "Best fantasy movie I've seen in YEARS. Someone call HBO, this needs a spinoff series ASAP."
        },
        {
            "title": "Skyward Bound",
            "firstName": "Harper",
            "lastName": "Steele",
            "rating": 5,
            "text": "Beautiful to look at, but at some point, I realized I cared more about the airships than the characters. Sorry, not sorry."
          },
          {
            "title": "Skyward Bound",
            "firstName": "Benjamin",
            "lastName": "Ford",
            "rating": 9,
            "text": "The only thing missing was a giant sky whale. Otherwise, perfect steampunk adventure. Would watch again just for the vibes."
          },
          {
            "title": "Shadows of Yesterday",
            "firstName": "Aria",
            "lastName": "Griffin",
            "rating": 3,
            "text": "Slow. Like molasses slow. I think I aged five years watching it. Someone please invent a fast-forward button for movie theaters."
          },
          {
            "title": "Shadows of Yesterday",
            "firstName": "Carter",
            "lastName": "Brooks",
            "rating": 8,
            "text": "Emotional gut punch after gut punch. I now trust no clocks and even less my own life choices. Thanks, I think?"
          },
          {
            "title": "Circuit Breaker",
            "firstName": "Zoe",
            "lastName": "Martinez",
            "rating": 4,
            "text": "Look, I love hacking movies. But how many times can you dramatically yell 'I'M IN!' before it becomes comedy?"
          },
          {
            "title": "Circuit Breaker",
            "firstName": "Dylan",
            "lastName": "Bennett",
            "rating": 7,
            "text": "Pretty intense! Although if real hacking was this stylish, I'd have become a hacker instead of a middle school math teacher."
          },
          {
            "title": "Whiskered Warriors",
            "firstName": "Ella",
            "lastName": "Roberts",
            "rating": 2,
            "text": "Wasn’t realistic enough. Cats would NEVER cooperate like that. I have three cats and they barely come when I have treats."
          },
          {
            "title": "Whiskered Warriors",
            "firstName": "Caleb",
            "lastName": "Price",
            "rating": 10,
            "text": "I haven't laughed this hard since that one time my cat fell in the bathtub. Pure genius."
          },
          {
            "title": "Neon Wasteland",
            "firstName": "Scarlett",
            "lastName": "Hughes",
            "rating": 6,
            "text": "Looked amazing. Plot? Uhhh... still trying to piece it together. Pretty sure a raccoon with neon goggles was in charge at one point."
          },
          {
            "title": "Neon Wasteland",
            "firstName": "Luke",
            "lastName": "Sanders",
            "rating": 9,
            "text": "A neon fever dream in the best possible way. Nova Reyes deserves a franchise."
          },
          {
            "title": "Haunting Echoes",
            "firstName": "Victoria",
            "lastName": "Morris",
            "rating": 2,
            "text": "More like *Haunting Plot Holes.* I was rooting for the ghost to just pack up and leave out of sheer frustration."
          },
          {
            "title": "Haunting Echoes",
            "firstName": "Logan",
            "lastName": "Russell",
            "rating": 7,
            "text": "Some cheap jump scares, but honestly, it got me. Twice. Okay, maybe four times. Don't judge me."
          },
          {
            "title": "Velvet Strings",
            "firstName": "Camila",
            "lastName": "Warren",
            "rating": 10,
            "text": "A symphony for the soul. Bonus points for making me ugly cry and then immediately want to sign up for violin lessons."
          },
          {
            "title": "Velvet Strings",
            "firstName": "Nathan",
            "lastName": "Bryant",
            "rating": 4,
            "text": "Beautiful music, but honestly, way too much slow staring into the distance. I started timing them."
          },
          {
            "title": "Cursed Sands",
            "firstName": "Audrey",
            "lastName": "Fleming",
            "rating": 5,
            "text": "Listen, if you find a cursed tomb, maybe just... don’t open it?? Common sense levels were dangerously low here."
          },
          {
            "title": "Cursed Sands",
            "firstName": "Grayson",
            "lastName": "Beck",
            "rating": 8,
            "text": "Great dusty adventure. Was halfway convinced I was going to get cursed just for watching it."
          },
          {
            "title": "Breaking the Ice",
            "firstName": "Brooklyn",
            "lastName": "Simmons",
            "rating": 6,
            "text": "Funny, but the real comedy was me trying to explain the rules of curling to my dad afterward."
          },
          {
            "title": "Breaking the Ice",
            "firstName": "Hunter",
            "lastName": "Dixon",
            "rating": 9,
            "text": "Didn’t expect to be emotionally invested in curling but here we are. 2025 is weird."
          },
          {
            "title": "Kingdoms Rise",
            "firstName": "Madeline",
            "lastName": "Jordan",
            "rating": 5,
            "text": "Beautiful visuals but every single character was giving 'trust issues' energy. Would not want to join any of their kingdoms, sorry."
          },
          {
            "title": "Kingdoms Rise",
            "firstName": "Levi",
            "lastName": "Woods",
            "rating": 10,
            "text": "10/10 epic fantasy masterpiece. Had me swinging an invisible sword in the parking lot afterward. No regrets."
          },
          {
            "title": "Kingdoms Rise",
            "firstName": "Sophie",
            "lastName": "Barrett",
            "rating": 3,
            "text": "Way too long. If I wanted to watch people argue about ancient prophecies for three hours, I’d crash a family Thanksgiving."
          }    
    ]

    private currentMovie = "";

    getAverageRatingByTitle(title: string): number | undefined {
        // Filter reviews for the specific title
        const filteredReviews = this.reviews.filter(review => review.title === title);
      
        if (filteredReviews.length === 0) {
          return undefined; 
        }
      
        const totalRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0);
        const average = totalRating / filteredReviews.length;
        return Math.round(average);
    }

    getReviewsByTitle(title: string): Review[] {
        return this.reviews.filter(review => review.title === title);
    }

    addReview(title: string, firstName: string, lastName: string, rating: number, text: string): Review | undefined {
        var newReview : Review = {title, firstName, lastName, rating, text};
        this.reviews.push(newReview);
        return newReview;
    }

    setMovieToLoad(title: string): void{
        this.currentMovie = title;
    }

    loadReviews() : Review[] {
        return this.getReviewsByTitle(this.currentMovie);
    }

    getCurrentMovie() : String {
        return this.currentMovie;
    }

}