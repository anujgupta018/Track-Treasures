import React, { ReactNode } from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="relative flex h-screen w-full flex-col">{children}</div>;
}

export default layout;
