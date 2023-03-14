declare module "*.jpeg";

declare module "*.png";

export interface PostData {
    id: string,
    author: string,
    previewImage: string;
    title: string,
    created: number,
    score: number,
    num_comments: number,
    avatar: string;
}

export interface CommentData {
    id: string,
    name: string,
    text: string,
    created: number
}