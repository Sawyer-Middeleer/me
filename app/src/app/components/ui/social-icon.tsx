"use client";

import { PropsWithChildren } from "react";
import { Button } from "./button";

type SocialIconProps = PropsWithChildren<{
  href: string;
  label: string;
}>;

export default function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <div className="transform transition-transform duration-200 hover:scale-105">
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="group relative p-2"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="relative"
        >
          <div className="absolute inset-[-8px] rounded-md border-2 border-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          {children}
        </a>
      </Button>
    </div>
  );
}


