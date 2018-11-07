import { Identity } from '../entities';

interface Message {
    content: Content;
    recipient: Identity;
    sender: Identity;
    type: string;
}

export default Message;