import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface NavbarItemsProps {
  icon: string | StaticImageData
  title: string
  proficiency: 'Experienced' | 'Intermediate' | 'Junior'
  invisible?: boolean
}

export default function Cards({
  icon,
  title,
  proficiency,
  invisible,
}: NavbarItemsProps) {
  return (
    <div
      className={twMerge(
        'border-primary-color flex h-fit w-fit items-center justify-center rounded-xl border bg-transparent px-4 py-4',
        invisible === true ? 'invisible' : '',
      )}
    >
      <Image src={icon} className="mr-4" width={50} height={50} alt={title} />
      <div className="flex h-14 w-fit flex-col justify-center">
        <h3 className="w-[130px] font-semibold">{title}</h3>
        <p>{proficiency}</p>
      </div>
    </div>
  )
}
