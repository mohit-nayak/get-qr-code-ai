"use client"

import React, { createContext, useContext, useRef, RefObject, ReactNode } from 'react';

type RefContextType = RefObject<HTMLDivElement> | null;

const RefContext = createContext<RefContextType>(null);

interface RefProviderProps {
  children: ReactNode;
}

export const RefProvider: React.FC<RefProviderProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <RefContext.Provider value={ref}>
      {children}
    </RefContext.Provider>
  );
};

export const useGlobalRef = (): RefContextType => {
  return useContext(RefContext);
};