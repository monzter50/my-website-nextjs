"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import React from "react";

import { MDXComponents } from "../MDXComponents";

export default function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...MDXComponents,
        ...(props.components || {}) }}
    />
  );
}
