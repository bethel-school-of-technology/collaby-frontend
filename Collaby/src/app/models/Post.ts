import { CreatePost } from './CreatePost';

export class Post extends CreatePost {

    UserId:number;
    Id: number;
    DateCreated?: Date;
    DateModified?: Date;
    RatingValue?: number; //all ratings combined
    RatingCount: number;
    TotalComments: number;
}