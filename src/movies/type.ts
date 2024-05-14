export type IReviewer = {
    id: number,
    name: string,
    avt: string,
    userName:string,
}
export type IItemReview = {
    id:number,
    reviewer: IReviewer,
    review_at: Date,
    content:string,
    rating: number,
}