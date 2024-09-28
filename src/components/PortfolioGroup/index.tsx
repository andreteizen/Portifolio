'use client'

import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavbarItemsProps {
  printscreen: string | StaticImageData
  title: string
  description: string
  shortDescription: string
  projectType: string
  tools: string[]
  githubLink?: string
  live: string

  className?: string
}

export default function PortfolioGroup({
  className,
  description,
  printscreen,
  shortDescription,
  title,
  projectType,
  tools,
  live,
  githubLink,
}: NavbarItemsProps) {
  return (
    <Link
      href={live}
      target="_blank"
      className={twMerge(
        // Usando classes responsivas de largura e altura
        'relative flex flex-col md:flex-row h-fit md:h-[350px] w-[90%] md:w-[70%] mx-auto items-center justify-center rounded-3xl bg-white text-black shadow-md transition-transform duration-300 hover:scale-105',
        className,
      )}
    >
      {/* Imagem e overlay */}
      <Image
        src={printscreen}
        alt={title}
        // Responsivo: full width em telas pequenas, metade em maiores
        className="h-[200px] md:h-full w-full md:w-1/2 rounded-t-3xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-3xl md:rounded-tl-3xl object-cover object-top"
      />

      {/* Container da descrição e botões */}
      <div className="flex h-full w-full md:w-1/2 flex-col justify-around px-4 py-6 md:px-10 md:py-0">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <h3 className="font-light italic">{projectType}</h3>
        </div>
        <p className="text-sm md:text-base">{shortDescription}</p>

        {/* Layout responsivo para as ferramentas */}
        <div className="flex flex-wrap gap-2 pt-4 md:mt-0 pb-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 shadow-sm transition-colors hover:bg-blue-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay: desativado em mobile */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Lado esquerdo: Descrição */}
          <div className="w-full md:w-1/2 flex items-start justify-center flex-col bg-white dark:bg-gray-900 dark:text-white bg-opacity-90 p-6 rounded-t-3xl  md:rounded-tr-none md:rounded-br-none md:rounded-bl-3xl md:rounded-tl-3xl">
            <h1 className="text-lg md:text-xl font-bold mb-5">{title}</h1>
            <p className="text-gray-800 dark:text-white/70 text-sm md:text-base whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Lado direito: Botões */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-900 bg-opacity-90 rounded-b-3xl md:rounded-br-3xl md:rounded-tr-3xl">
            {/* Botão para o site */}
            <Link
              href={live}
              target="_blank"
              className="flex w-32 items-center justify-center rounded-md bg-black px-4 py-2 text-white shadow-md transition hover:bg-gray-800 dark:bg-foreground dark:text-black dark:hover:bg-foreground/70"
            >
              Website <ExternalLinkIcon className="ml-2 h-6 w-6" />
            </Link>

            {/* Botão para o GitHub (se disponível) */}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="flex w-32 items-center justify-center rounded-md bg-black px-4 py-2 text-white shadow-md transition hover:bg-gray-800 dark:bg-foreground dark:text-black dark:hover:bg-foreground/70"
              >
                GitHub <ExternalLinkIcon className="ml-2 h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
