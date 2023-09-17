'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../assets/images/logo.svg'
import EyeButton from '../assets/images/eye-button.svg'

export default function Header() {
  const [open, setOpen] = useState<Boolean>(false)

  return (
    <header className="absolute w-full flex justify-between p-5 px-10 bg-transparent">
      <Logo className="hidden lg:inline" height={36} />
      <button
        type="button"
        className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <nav className="hidden lg:inline-flex lg:gap-x-12 uppercase items-center gap-[20px] font-normal text-white text-[12px] tracking-[0.5px] leading-[18px]">
        <Link href="/">Sign In</Link>
        <Link href="/">Legal</Link>
        <Link href="/">Licenses</Link>
        <Link href="/">Security</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Press</Link>
        <Link href="/">Support</Link>
        <Link href="/">Status</Link>
        <Link href="/">Codeblog</Link>
      </nav>
      <nav
        className={`lg:hidden fixed inset-y-0 right-0 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } z-40 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10 text-white ease-in-out duration-500`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <Logo className="w-auto h-auto" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5"
            onClick={() => setOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root space-y-2 py-6">
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Sign In
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Legal
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Licenses
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Security
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Careers
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Press
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Support
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Status
          </Link>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
          >
            Codeblog
          </Link>
        </div>
      </nav>
      <EyeButton />
    </header>
  )
}
