export interface Group {
    name: string;
    connections: Connection[];
}

interface Connection {
    conectionId: string;
    username: string;
}