import { Post } from "./post.model";
import { User } from "./user.model";


export class Comment {
    id?: number;
    //@ts-ignore
    comment_text : string;
    //@ts-ignore
    dateofpublication : Date;
    //@ts-ignore
    attachement : string;
    //@ts-ignore
    comment_owner : User;
    //@ts-ignore
    belong_post : Post;
}
