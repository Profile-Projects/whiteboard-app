import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { Socket } from "socket.io-client";
import SingletonSocket from "../utils/SingletonSocket";

const existingUrls = new Map();
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }



interface useSocketProps {
    url: string
};

interface useSocketReturnValues {
    socket: any,
    joinBoard: any
}

const useSocket = ({url}: useSocketProps): useSocketReturnValues  => {
    
    const [socket, setSocket ] = useState<any>(null);

    const joinBoard = ({ board_sid, user_sid }: { board_sid: string, user_sid: string}) => {
      socket.emit(`join_board`, { board_sid, user_sid });
    }

    useEffect(() => {
      console.log(`url : ${url}`)
        if (!socket) {
            setSocket(SingletonSocket.getInstance(url))
        }
        return () => {
            socket?.disconnect();
        }
    }, [url]);

    return {
      socket,
      joinBoard
    };
};

export default useSocket;