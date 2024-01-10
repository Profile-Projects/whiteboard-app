import io from "socket.io-client";

class SingletonSocket {

    static instance: any;
    
    constructor() {
    }
    
    static getInstance (url: string) {
        if (!SingletonSocket.instance) {
            SingletonSocket.instance = io(url);
        }
        return SingletonSocket.instance;
    }
};

export default SingletonSocket;