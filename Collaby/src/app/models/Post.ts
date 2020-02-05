import { CreatePost } from './CreatePost';

export class Post extends CreatePost {

    Id:number;
    DateCreate?:Date;
    DateModified?:Date;
    RatingValue?:number; //number = floating point value
    RatingCount:number;
    TotalComments:number;
}