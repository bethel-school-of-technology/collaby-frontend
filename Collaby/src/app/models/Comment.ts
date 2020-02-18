import { CreateComment } from './CreateComment'

export class Comment extends CreateComment {

    Id: number;
    UserId: number;
    IsDraft: number;
    DateCreated?: Date;
}