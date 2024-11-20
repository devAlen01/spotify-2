import LayoutSite from "@/components/layout/LayoutSite";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LayoutSite>{children}</LayoutSite>
    </>
  );
};

export default layout;
