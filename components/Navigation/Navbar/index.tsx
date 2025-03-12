'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Logotipo } from '@components/Icons'
import Wrapper from '@components/Surfaces/Wrapper'
import Hamburger from '@components/Icons/Hamburger'
import { Locale } from '@root/i18n-config'
import LocaleSwitcher from '../LocalSwitcher'
import { useContext } from 'react'
import { LocaleContext } from '@root/src/provider/LocaleProvider'

export default function Navbar({  locale }: { locale: Locale}): JSX.Element {
  const localeContext = useContext(LocaleContext)
  const dictionary: any = localeContext?.state
  const t: any = dictionary
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation Backdrop */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40'
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className='fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800/50'>
        <Wrapper>
          <div className='flex items-center justify-between h-16 px-4'>
            <Link href='/' className='flex-shrink-0'>
              <Logotipo height={40} width={120} />
            </Link>
        
            {/* Hamburger Menu */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500'
                aria-expanded={isOpen}
              >
                <span className='sr-only'>Open main menu</span>
                <Hamburger size={24} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex md:items-center md:space-x-4'>
              <nav className='flex items-center space-x-4'>
                <a href="#home" className="nav-link">{t?.nav?.home}</a>
                <a href="#aboutme" className="nav-link">{t?.nav?.aboutme}</a>
                <a href="#skills" className="nav-link">{t?.nav?.skills}</a>
                <a href="#experiences" className="nav-link">{t?.nav?.experiences}</a>
                <a href="#blog" className="nav-link">{t?.nav?.blog}</a>
                <a href="#project" className="nav-link">{t?.nav?.project}</a>
              </nav>
              <div className='pl-4 border-l border-slate-700/50'>
                <LocaleSwitcher locale={locale} />
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed top-0 left-0 h-full w-72 bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className='flex flex-col h-full pt-16'>
              <div className='p-4 space-y-4'>
                <a href="#home" className="mobile-nav-link">{t?.nav?.home}</a>
                <a href="#aboutme" className="mobile-nav-link">{t?.nav?.aboutme}</a>
                <a href="#skills" className="mobile-nav-link">{t?.nav?.skills}</a>
                <a href="#experiences" className="mobile-nav-link">{t?.nav?.experiences}</a>
                <a href="#blog" className="mobile-nav-link">{t?.nav?.blog}</a>
                <a href="#project" className="mobile-nav-link">{t?.nav?.project}</a>
                <div className='pt-4 mt-4 border-t border-slate-700/50'>
                  <LocaleSwitcher locale={locale} />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </nav>
    </>
  )
}
