import { PiggyBank } from "lucide-react";
import React from "react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
      <p
        className="bg-gradient-to-r from-blue-500 to-yellow-600 bg-clip-text text-3xl font-bold 
      leading-tight tracking-tighter text-transparent"
      >
        Track-Treasure
      </p>
    </a>
  );
}
export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p
        className="bg-gradient-to-r from-blue-500 to-yellow-600 bg-clip-text text-3xl font-bold 
      leading-tight tracking-tighter text-transparent"
      >
        Track-Treasure
      </p>
    </a>
  );
}
