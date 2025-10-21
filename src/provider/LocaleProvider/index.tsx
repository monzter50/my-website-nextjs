"use client";
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

export interface Dictionary {
  introduction?: {
    title?: string
    subtitle?: string
    followme?: string
  }
  nav?: {
    home?: string
    aboutme?: string
    skills?: string
    experiences?: string
    blog?: string
    project?: string
  }
  aboutme?: {
    title?: string
    description?: string
  }
  experiences?: {
    title?: string
  }
  posts?: {
    title?: string
    more?: string
  }
  projects?: {
    title?: string
    more?: string
  }
  skills?: {
    title?: string
  }
  [key: string]: unknown
}

interface IContext {
  state: Dictionary
  setState: Dispatch<SetStateAction<Dictionary>>
  lng: "es-MX" | "en-US"
}

export const LocaleContext = createContext<IContext | null>(null);

export function LocaleProvider({ children, dictionary = {}, lng = "es-MX" }: {
  children: ReactNode
  dictionary: Dictionary
  lng: "es-MX" | "en-US"
}) {
  const [ state, setState ] = useState<Dictionary>(dictionary);

  return (
    <LocaleContext.Provider
      value={{
        state,
        setState,
        lng
      }}>
      {children}
    </LocaleContext.Provider>
  );
}
