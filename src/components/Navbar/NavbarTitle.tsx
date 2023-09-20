interface NavbarTitleProps {
  title: string
}

export function NavbarTitle({ title }: NavbarTitleProps) {
  return <div className="text-3xl font-black tracking-tighter">{title}</div>
}
