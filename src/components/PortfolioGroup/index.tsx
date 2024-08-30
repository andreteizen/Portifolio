'use client'

import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavbarItemsProps {
  printscreen: string | StaticImageData
  title: string
  description: string
  tools: string[]
  githubLink?: string
  live: string

  className?: string
}

export default function PortfolioGroup({
  className,
  description,
  printscreen,
  title,
  tools,
  live,
}: NavbarItemsProps) {
  return (
    <div
      className={twMerge(
        'flex h-[500px] w-3/4 items-center justify-center rounded-3xl bg-white text-black shadow-md',
        className,
      )}
    >
      <Image
        src={printscreen}
        alt={title}
        className="h-full w-1/2 overflow-y-auto rounded-bl-3xl rounded-tl-3xl object-cover object-top"
      />
      <div className="flex h-full w-1/2 flex-col justify-around px-10">
        <h1 className="self-center text-lg font-bold">{title}</h1>
        <p className="mt-6 text-center text-sm text-gray-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-y-3">
          {tools.map((tool, index) => {
            return (
              <div
                key={index}
                className={`mr-3 rounded-md border border-gray-300 px-2 font-semibold shadow-sm`}
              >
                {tool}
              </div>
            )
          })}
        </div>
        <div className="mt-6 flex self-center">
          <Link
            href={live}
            target="_blank"
            className="flex items-center justify-center text-xl"
          >
            Website <ExternalLinkIcon className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
