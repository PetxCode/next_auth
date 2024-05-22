"use client";

import React, { FC, createContext, useState } from "react";

interface iUser {
  name: string;
  email: string;
  password: string;
}

interface iProps {
  user?: iUser | null;
  setUser?: React.Dispatch<React.SetStateAction<iUser | null>>;
  children?: React.ReactNode;
}

export const GlobalContext = createContext({} as iProps);

export const GlobalProvider: FC<iProps> = ({ children }) => {
  const [user, setUser] = useState<iUser | null>({} as iUser);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
