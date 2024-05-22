"use client";

import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <Wrapper />
    </SessionProvider>
  );
};

export default page;
