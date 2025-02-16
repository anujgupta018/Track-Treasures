import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col">
        <Navbar/>
      <div>{children}</div>
    </div>
  );
}

export default layout;
