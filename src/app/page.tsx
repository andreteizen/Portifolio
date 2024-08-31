import { Navbar } from '@/components/Navbar'
import { TabsAboutMe } from '@/components/NavSelection/AboutMe'
import Image from 'next/image'
import perfilPhoto from '@public/fotoPerfil.jpg'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '@/components/ButtonTabsH'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { TabsTools } from '@/components/NavSelection/Tools'
import PortfolioGroup from '@/components/PortfolioGroup'
import PrtrackPrint from '@public/Portfolio/PRTrack2.png'
import Footer from '@/components/Footer'

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
        </Navbar.Items>
      </Navbar.Root>

      {/* Main section */}
      <div className="my-16 flex w-full flex-row items-center justify-evenly p-14">
        <div className="flex flex-col items-center leading-loose">
          <div className="font-regular mb-2 text-3xl">Hello, I am</div>
          <div className="mb-4 text-5xl font-extrabold">André Teizen</div>
          <div className="mb-8 text-5xl font-medium">Full-stack Developer</div>
          <div className="my-7 flex h-14 w-full flex-row justify-evenly">
            <a href="../../Arquivos/resume.pdf" download>
              <Button
                id="DownloadCV"
                styleType="filled"
                key="DownloadCV"
                className="px-4"
              >
                Download CV
              </Button>
            </a>
            {/* <CopyEmailButton /> */}
          </div>
          <div className="mt-10 flex h-10 w-full flex-row justify-evenly">
            <Link
              target="_blank"
              href="https://github.com/andreteizen"
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
        <Image
          src={perfilPhoto}
          alt="Picture of the author"
          sizes="20vw"
          className="border-secondary-color z-[90] h-auto w-auto border-4 shadow-md transition-transform duration-500 hover:rotate-2 hover:scale-105"
          style={{
            clipPath:
              'polygon(10% 0%, 90% 0%, 100% 30%, 90% 100%, 10% 100%, 0% 70%)',
          }}
        />
      </div>

      {/* About me section */}
      <div
        id="aboutme"
        className="mt-20 flex w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 text-3xl">Get to know more</div>
        <div className="mb-4 text-5xl font-extrabold">About Me</div>

        <TabsAboutMe />
      </div>

      {/* Tools section */}
      <div
        id="tools"
        className="mt-20 flex h-fit w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 text-3xl">What</div>
        <div className="mb-2 text-5xl font-extrabold">TOOLS</div>
        <div className="font-regular mb-2 text-3xl">I use</div>
        <TabsTools />
      </div>

      {/* Portfolio section */}
      <div
        id="portfolio"
        className="mt-80 flex w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 text-3xl">See my</div>
        <div className="mb-4 text-5xl font-extrabold">Portfolio</div>

        <PortfolioGroup
          className="mt-20"
          printscreen={PrtrackPrint}
          title="PR Track"
          description="A social networking and activity tracking platform for endurance sports enthusiasts. This website features user login, interaction capabilities between users, performance scoring for each sport, and integration with various APIs, such as Strava, Google Login, SendGrid, and AWS Lambda functions."
          live="https://www.prtrack.live/"
          tools={[
            'NextJS',
            'ReactJS',
            'Typescript',
            'TailwindCSS',
            'ContextAPI',
            'ESLint',
            'AWS',
            'PrismaORM',
            'Jest',
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
