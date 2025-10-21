"use client";
import React from "react";

import CustomImage from "@components/dataDisplay/CustomImage";
import Pre from "@components/dataDisplay/Pre";
import Heading from "@components/Typhografy/Heading";
import Text from "@components/Typhografy/Text";

export const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h4" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h5" {...props} />,
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h6" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Text {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className='text-black dark:text-white list-disc ml-5 pl-5' {...props} />,

  CustomImage,
  pre: Pre
};
