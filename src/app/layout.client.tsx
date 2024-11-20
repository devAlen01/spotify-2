"use client";

import ReduxProvider from "@/providers/ReduxProvider";
import { ReactNode } from "react";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
};

export default LayoutClient;
