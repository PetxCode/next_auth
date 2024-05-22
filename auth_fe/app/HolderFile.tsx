import { GlobalProvider } from "@/global/GlobalProvider";
import React, { FC } from "react";

interface iProps {
  children: React.ReactNode;
}

const HolderFile: FC<iProps> = ({ children }) => {
  return (
    <div>
      <GlobalProvider>{children}</GlobalProvider>
    </div>
  );
};

export default HolderFile;
