import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Reservation } from "./reservation.model";

@Injectable()
export class UserService{
    static simulatedUsers: Array<User> = [
        {
          id: 1,
          firstName: 'simulated',
          lastName: 'user',
          email: 'guest@account',
          phoneNumber: '8767659362',
          address: '56 simulated adress',
          genres: ['Adventure'],
          password: 'securePassword123',
        },
     ];

    currentUser : User = UserService.simulatedUsers[0];
    reservationsToLoad !: Reservation[];

    getUserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User | null {
        let foundUser : User | null = null;
        
        foundUser = UserService.simulatedUsers.find(userToFind => userToFind.id === id) || null;

        if (foundUser) {
            this.currentUser = foundUser;
        }

        return foundUser;
    }

    getUser(userEmail: string) : User | null {
        let foundUser : User | null = null
        foundUser = UserService.simulatedUsers.find(userToFind => userToFind.email == userEmail) || null;

        if (foundUser) {
            this.currentUser = foundUser
        }

        return foundUser;
    }

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.simulatedUsers.find(userToFind =>
        (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(firstName: string, lastName: string, email: string, phoneNumber: string, address: string, genres: string[], password: string): User {
        var maxId : number = 0;
        UserService.simulatedUsers.forEach((user) => 
        {
            if(maxId < user.id) 
            {
                maxId = user.id;
            }
        });

        var id = ++maxId;
        var user : User = {id, firstName, lastName, email, phoneNumber, address, genres, password};

        UserService.simulatedUsers.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }

    getReservations(id: number) : Reservation[] | null {
        var dummyUser = this.currentUser;
        if (dummyUser) {
            if (dummyUser.currentReservations != null) {
                return dummyUser.currentReservations;
            }
        } 
        return null;
    }

    addReservation(reservation : Reservation){
       this.reservationsToLoad.push(reservation);
        
    }

    getReservationsToLoad() {
        return this.reservationsToLoad;
    }
    
}