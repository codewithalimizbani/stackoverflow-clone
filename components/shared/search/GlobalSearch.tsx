import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient  relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image src="/assets/icons/search.svg" width={24} height={24} alt="" />
        <Input
          value=""
          type="text"
          placeholder="search globaly"
          className="paragraph-regular background-light800_darkgradient no-focus placeholder border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
