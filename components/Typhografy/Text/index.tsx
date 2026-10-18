
"use client";
import classNames from "classnames";
import React from "react";
interface TextProps {
  children: React.ReactNode
  className?: string
}

export default function Text({ children, className }: TextProps) {
  const classes = classNames(className, "text-base font-normal my-5");
  return <p className={classes}>{children}</p>;
}
