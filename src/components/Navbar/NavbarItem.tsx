import Link, { LinkProps } from 'next/link'

interface NavbarItemProps extends LinkProps {
  text: string
}

export function NavbarItem({ href, text }: NavbarItemProps) {
  return (
    <li className="mx-8 ">
      <Link className="hover:text-secondary-light/70" href={href}>
        {text}
      </Link>
    </li>
  )
}
