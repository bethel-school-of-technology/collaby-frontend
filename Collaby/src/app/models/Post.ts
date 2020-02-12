import { CreatePost } from './CreatePost';

export class Post extends CreatePost {

    UserId:number;
    Id: number;
    DateCreated?: Date;
    DateModified?: Date;
    RatingValue?: number; //number = floating point value
    RatingCount: number;
    TotalComments: number;
}