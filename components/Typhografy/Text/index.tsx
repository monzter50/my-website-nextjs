
"use client";
import React from "react";
import classNames from "classnames";
interface TextProps {
  children: React.ReactNode
  className?: string
}

export default function Text({ children, className }: TextProps) {
    const classes = classNames(className, "text-base font-normal my-5");
    return <p className={classes}>{children}</p>;
}
