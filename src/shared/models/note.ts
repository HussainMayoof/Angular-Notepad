export class Note {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor (
        public title: string,
        public contents: string,
    ) {
        this.id = Date.now().toString();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}