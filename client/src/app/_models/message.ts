export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    recipientId: number;
    senderPhotoUrl: string;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dateRead: Date;
    messageSent: Date;
}
