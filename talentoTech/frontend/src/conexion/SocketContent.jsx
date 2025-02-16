
import React, { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('https://talentotech-final-project-server-99aujozi3-s-diaz05s-projects.vercel.app/');
    setSocket(newSocket);

    return () => {
      newSocket.close();
    }
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
