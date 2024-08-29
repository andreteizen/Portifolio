import { Navbar } from '@/components/Navbar'
import { TabsAboutMe } from '@/components/NavSelection/AboutMe'
import Image from 'next/image'
import perfilPhoto from 'public/perfil.png'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '@/components/ButtonTabsH'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { TabsTools } from '@/components/NavSelection/Tools'

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Navbar */}
      <Navbar.Root>
        <Navbar.Title title="André Teizen" />
        <Navbar.Items>
          <Navbar.Item href={'#aboutme'} text="About me" />
          <Navbar.Item href={'#tools'} text="Tools" />
          <Navbar.Item href={'#portfolio'} text="Portfolio" />
          <Navbar.Item href={'#contact'} text="Contact" />
        </Navbar.Items>
      </Navbar.Root>

      {/* Main section */}
      <div className="flex flex-row w-full items-center justify-evenly p-14 my-16">
        <div className="flex flex-col items-center leading-loose">
          <div className="text-3xl font-regular mb-2">Hello, I am</div>
          <div className="text-5xl font-extrabold mb-4">André Teizen</div>
          <div className="text-5xl font-medium mb-8">Full-stack Developer</div>
          <div className="flex flex-row my-7 w-full justify-evenly h-14">
            <Button id="DownloadCV" key="DownloadCV" className="px-4">
              Download CV
            </Button>
            <Button id="ContactInfo" key="ContactInfo" styleType='filled' className="px-4">
              Contact Info
            </Button>
          </div>
          <div className="flex flex-row mt-10 w-full h-10 justify-evenly">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/andre-teizen/"
              passHref
            >
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

            <Link
              target="_blank"
              href="https://wa.me/5514991823065"
              passHref
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                width="2.5rem"
                height="2.5rem"
                className="hover:text-primary-color/60"
              />
            </Link>
          </div>
        </div>
        <Image
          src={perfilPhoto}
          alt="Picture of the author"
          sizes="20vw"
          className="w-auto h-auto border-4 border-secondary-color rounded-full"
        />
      </div>

      {/* About me section */}
      <div id='aboutme' className='w-full flex flex-col justify-center items-center mt-20'>
        <div className="text-3xl font-regular mb-2">Get to know more</div>
        <div className="text-5xl font-extrabold mb-4">About Me</div>

        <TabsAboutMe />
      </div>

      {/* Tools section */}
      <div id='tools' className='w-full h-fit flex flex-col justify-center items-center mt-20'>
        <div className="text-3xl font-regular mb-2">What</div>
        <div className="text-5xl font-extrabold mb-2">TOOLS</div>
        <div className="text-3xl font-regular mb-2">I use</div>
        <TabsTools />
      </div>

      
      {/* Portfolio section */}
      <div id='portfolio' className='w-full flex flex-col justify-center items-center mt-80'>
        <div className="text-3xl font-regular mb-2">See my</div>
        <div className="text-5xl font-extrabold mb-4">Portfolio</div>

        <TabsAboutMe />
      </div>

    </main>
  )
}
