'use client'
import { Heading, Text } from '@components/Typhografy'
import React, { useContext } from 'react'
import { LocaleContext } from '@root/src/provider/LocaleProvider'

export default function AboutMe() {
  const localeContext = useContext(LocaleContext)
  const dictionary: any = localeContext?.state
  const t: any = dictionary

  return (
        <section id='aboutme' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t?.aboutme?.title}</Heading>
            <Text>{t?.aboutme?.description}</Text>
        </section>
  )
}
