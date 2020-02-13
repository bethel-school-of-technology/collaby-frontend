import { User } from './User';

export class Profile extends User {
    TotalRating: number;
    RatedPosts: number;
    TotalPosts: number;
    Followings: string;
}