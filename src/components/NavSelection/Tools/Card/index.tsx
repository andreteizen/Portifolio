import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface NavbarItemsProps {
  icon: string | StaticImageData
  title: string
  proficiency: 'Experienced' | 'Intermediate' | 'Junior'
  invisible?: boolean
  className?: string
}

export default function Cards({
  icon,
  title,
  proficiency,
  invisible,
  className,
}: NavbarItemsProps) {
  return (
    <div
      className={twMerge(
        'border-primary-color flex h-fit min-w-full md:min-w-fit w-fit items-center justify-center rounded-xl border bg-transparent px-4 py-2 md:px-4 md:py-4',
        invisible === true ? 'invisible' : '',
        className,
      )}
    >
      <Image
        src={icon}
        className="mr-4 md:w-[50px] md:h-[50px] w-[20px] h-[20px]"
        width={50}
        height={50}
        alt={title}
      />
      <div className="flex md:h-14 w-fit flex-col justify-center">
        <h3 className="md:w-[130px] font-semibold text-base">{title}</h3>
        <p className="text-sm">{proficiency}</p>
      </div>
    </div>
  )
}
