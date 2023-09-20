import { ReactNode } from 'react'

interface NavbarItemsProps {
  children: ReactNode
}

export function NavbarItems({ children }: NavbarItemsProps) {
  return <ul className="flex flex-row px-5">{children}</ul>
}
