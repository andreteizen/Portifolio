import Link, { LinkProps } from 'next/link'

interface NavbarItemProps extends LinkProps {
  text: string
}

export function NavbarItem({ text, ...rest }: NavbarItemProps) {
  return (
    <li className="hover:text-primary-color/70 mx-8">
      <Link className="hover:text-primary-color/70" href={rest.href}>
        {text}
      </Link>
    </li>
  )
}
