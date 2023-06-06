import { v4 as uuidv4 } from 'uuid';

export class Note {
    id: string

    // In the constructor, shorthand to pass values title and string into the constructor
    constructor(public title: string, public content: string) {
        this.id = uuidv4();

    }
    
}