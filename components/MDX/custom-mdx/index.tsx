"use client";

import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";

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
