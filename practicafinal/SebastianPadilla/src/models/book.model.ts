export class Book {
    id?: string;
    authorName: string;
    editorialName: string;
    editorialNumber: string;
    title: string;
    languague: string;
    datePost: string;
    createdAt?: Date;

    constructor(authorName: string, editorialName: string, editorialNumber: string, title: string, languague: string, datePost: string, id?: string, createdAt?: Date) {
        this.id = id;
        this.authorName = authorName;
        this.editorialName = editorialName;
        this.editorialNumber = editorialNumber;
        this.title = title;
        this.languague = languague;
        this.datePost = datePost;
        this.createdAt = createdAt;
    }
}