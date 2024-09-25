import { ReactNode } from 'react'

interface NavbarRootProps {
  children: ReactNode
}

export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="z-[100] bg-secondary-color sticky top-0 w-full flex-row place-items-center justify-around py-5 align-middle shadow-md hidden md:flex">
      {children}
    </nav>
  )
}
