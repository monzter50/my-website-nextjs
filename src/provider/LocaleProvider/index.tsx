'use client'
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

interface IContext {
  state: object
  setState: Dispatch<SetStateAction<object>>
  lng: 'es-MX' | 'en-US'
}

export const LocaleContext = createContext<IContext | null>(null)

export function LocaleProvider({ children, dictionary = {}, lng = 'es-MX' }: {
  children: ReactNode
  dictionary: object
  lng: 'es-MX' | 'en-US'
}) {
  const [state, setState] = useState(dictionary)

  return (
        <LocaleContext.Provider
            value={{
              state,
              setState,
              lng
            }}>
            {children}
        </LocaleContext.Provider>
  )
}
