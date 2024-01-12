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
    joinBoard: any,
    addElement: any
}

const useSocket = ({url}: useSocketProps): useSocketReturnValues  => {
    
    const [socket, setSocket ] = useState<any>(null);

    const joinBoard = ({ board_sid, user_sid }: { board_sid: string, user_sid: string}) => {
      socket?.emit(`join_board`, { board_sid, user_sid });
    }

    const addElement = ({ board_sid, user_sid, position}: {
      board_sid: string,
      user_sid: string,
      position: object
    }) => {
      socket?.emit(`add_element`, {board_sid, user_sid, position})
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

    useEffect(() => {
      if (socket) {
        joinBoard({
          board_sid: "BD00001",
          "user_sid": "US00001"
        })
      }
    }, [socket])
    return {
      socket,
      joinBoard,
      addElement
    };
};

export default useSocket;