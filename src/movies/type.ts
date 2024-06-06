export type IReviewer = {
    id: number,
    name: string,
    avt: string,
    userName: string,
}
export type IItemReview = {
    id: number,
    reviewer: IReviewer,
    review_at: Date,
    content: string,
    rating: number,
}
export interface IGenre {
    id: number;
    name: string;
}
export interface IMovie {
    id: number;
    genres: IGenre[];
    title: string;
    overview: string;
    poster: string;
    release_date: Date;
    vote_count: number;
    is_new?:boolean;
}