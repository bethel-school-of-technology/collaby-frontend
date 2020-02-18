import { CreateComment } from './CreateComment'

export class Comment extends CreateComment {

    PostId: number;
    Id: number;
    UserId: number;
    IsDraft: number;
    DateCreated?: Date;
}