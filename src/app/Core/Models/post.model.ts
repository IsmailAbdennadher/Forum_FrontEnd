import { Comment } from "./comment.model";
import { User } from "./user.model";

export class Post {
    id?: number;
    title : string;
    post_text? : string;
    dateofpublication : Date;
    attachement? : string;
    post_owner : User;
    comments : Comment[];
    likes? : Number;
    dateSincePosted? : string
}
