import { ReactNode } from 'react'

interface NavbarRootProps {
  children: ReactNode
}

export function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="z-100 sticky top-0 flex w-full flex-row place-items-center justify-around py-5 align-middle bg-secondary-color shadow-md">
      {children}
    </nav>
  )
}
