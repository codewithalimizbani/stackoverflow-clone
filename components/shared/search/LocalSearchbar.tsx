"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  imgSrc: string;
  otherClasses?: string;
  placeholder: string;
  iconPosition: string;
}

const LocalSearchbar = ({
  route,
  imgSrc,
  otherClasses,
  placeholder,
  iconPosition,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient  relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
      <Input
        onChange={() => {}}
        value=""
        type="text"
        placeholder={placeholder}
        className="paragraph-regular background-light800_darkgradient  no-focus placeholder border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
