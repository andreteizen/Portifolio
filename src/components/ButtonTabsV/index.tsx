import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  styleType?: "" | "filled"
  active?: boolean
}

export function Button({ children, styleType = "", active = false, ...rest }: ButtonProps) {
  const activeStatus = ((styleType === "" && !active) ? "rounded-full" : "bg-primary-color text-white rounded-full") + " transition-colors duration-400"  // O status de ativo é definido pela class btn-filled
  const classType = twMerge(activeStatus, rest.className) // Resolve conflitos de CSS


  return (
    <button
    {...rest}
    className={classType}
  >
    {children}
  </button>
  )
}
