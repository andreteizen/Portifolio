import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default async function Footer() {
  return (
    <div className="mt-36 flex min-h-[100px] w-full items-center justify-between px-[20%] shadow-2xl">
      <p className="font-ligh w-fit whitespace-nowrap">
        All rights reserved © 2023 <b className="font-bold">André Teizen</b>
      </p>

      <div className="hidden md:flex h-10 w-fit flex-row justify-evenly space-x-7">
        <Link target="_blank" href="https://github.com/andreteizen" passHref>
          <GitHubLogoIcon
            width="2.5rem"
            height="2.5rem"
            className="hover:text-primary-color/60"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/andre-teizen/"
          passHref
        >
          <LinkedInLogoIcon
            width="2.5rem"
            height="2.5rem"
            className="hover:text-primary-color/60"
          />
        </Link>
        <Link
          target="_blank"
          href="https://bfas.short.gy/discord-andre"
          passHref
        >
          <FontAwesomeIcon
            icon={faDiscord}
            width="2.5rem"
            height="2.5rem"
            className="hover:text-primary-color/60"
          />
        </Link>

        <Link target="_blank" href="https://wa.me/5514991823065" passHref>
          <FontAwesomeIcon
            icon={faWhatsapp}
            width="2.5rem"
            height="2.5rem"
            className="hover:text-primary-color/60"
          />
        </Link>

        <Link target="_blank" href="mailto:andre.teizen@gmail.com" passHref>
          <FontAwesomeIcon
            icon={faEnvelope}
            width="2.5rem"
            height="2.5rem"
            className="hover:text-primary-color/60"
          />
        </Link>
      </div>
    </div>
  )
}
