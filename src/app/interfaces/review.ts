export interface Review {
    Id?: number,
    UserId?: number,
    Rating: number,
    ReviewContent: string,
    Recommendation: boolean,
    Tag: string,
    DateSubmitted?: Date,
}
