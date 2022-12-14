export interface Review {
    id?: number,
    userId?: number,
    albumId: string,
    albumName: string,
    imageURL: string,
    rating: number,
    reviewContent: string,
    recommendation: boolean,
    tag: string,
    dateSubmitted?: Date,
}
