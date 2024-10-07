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
import CarhubPrint from '@public/Portfolio/carhub.png'
import HilinkPrint from '@public/Portfolio/hilink.png'
import PortfolioPrint from '@public/Portfolio/portfolio.png'

import Footer from '@/components/Footer'
import { DevelopmentBanner } from '@/components/DevelopmentBanner'

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
          <Navbar.DarkModeToggle />
        </Navbar.Items>
      </Navbar.Root>

      {/* Mensagem de site em desenvolvimento */}
      <DevelopmentBanner />

      {/* Main section */}
      <div className="my-16 flex w-full flex-col-reverse items-center justify-center p-6 md:flex-row md:justify-evenly md:p-14 overflow-x-hidden">
        <div className="flex flex-col items-center leading-loose w-full md:w-fit">
          <div className="font-regular mt-6 md:mt-0 mb-2 text-2xl md:text-3xl">
            Hello, I am
          </div>
          <div className="mb-4 text-4xl font-extrabold md:text-5xl">
            André Teizen
          </div>
          <div className="mb-8 text-3xl font-medium md:text-5xl">
            Full-stack Developer
          </div>
          <div className="my-7 flex h-14 w-full flex-col items-center space-y-4 md:flex-row md:justify-evenly md:space-y-0">
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
          <div className="mt-10 flex h-10 w-full flex-wrap space-x-4 md:flex-row justify-evenly md:space-x-0">
            <Link
              target="_blank"
              href="https://github.com/andreteizen"
              passHref
            >
              <GitHubLogoIcon
                width="2rem"
                height="2rem"
                className="text-primary-color/60 hover:text-primary-color"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/andre-teizen/"
              passHref
            >
              <LinkedInLogoIcon
                width="2rem"
                height="2rem"
                className="text-primary-color/60 hover:text-primary-color"
              />
            </Link>
            <Link
              target="_blank"
              href="https://bfas.short.gy/discord-andre"
              passHref
            >
              <FontAwesomeIcon
                icon={faDiscord}
                width="2rem"
                height="2rem"
                className="text-primary-color/60 hover:text-primary-color"
              />
            </Link>
            <Link target="_blank" href="https://wa.me/5514991823065" passHref>
              <FontAwesomeIcon
                icon={faWhatsapp}
                width="2rem"
                height="2rem"
                className="text-primary-color/60 hover:text-primary-color"
              />
            </Link>
            <Link target="_blank" href="mailto:andre.teizen@gmail.com" passHref>
              <FontAwesomeIcon
                icon={faEnvelope}
                width="2rem"
                height="2rem"
                className="text-primary-color/60 hover:text-primary-color"
              />
            </Link>
          </div>
        </div>
        <Image
          src={perfilPhoto}
          alt="Picture of the author"
          sizes="40vw"
          className="border-secondary-color z-[90] w-60 h-auto border-4 shadow-md transition-transform duration-500 hover:rotate-2 hover:scale-105 md:w-[400px]"
          style={{
            clipPath:
              'polygon(10% 0%, 90% 0%, 100% 30%, 90% 100%, 10% 100%, 0% 70%)',
          }}
        />
      </div>

      {/* About me section */}
      <div
        id="aboutme"
        className="mt-36 md:mt-20 flex w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 text-xl md:text-3xl hidden md:block">
          Get to know more
        </div>
        <div className="mb-10 md:mb-4  text-4xl md:text-5xl font-extrabold">
          About Me
        </div>

        <TabsAboutMe />
      </div>

      {/* Tools section */}
      <div
        id="tools"
        className="mt-36 md:mt-20 flex h-fit w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 hidden md:block text-3xl">What</div>
        <div className="mb-2 text-4xl md:text-5xl font-extrabold">TOOLS</div>
        <div className="font-regular mb-2 hidden md:block text-3xl">I use</div>
        <TabsTools />
      </div>

      {/* Portfolio section */}
      <div
        id="portfolio"
        className="mt-40 flex w-full flex-col items-center justify-center"
      >
        <div className="font-regular mb-2 text-3xl hidden md:block">See my</div>
        <div className="mb-4 text-4xl md:text-5xl font-extrabold">
          Portfolio
        </div>

        <PortfolioGroup
          className="mt-20"
          printscreen={PrtrackPrint}
          title="PR Track"
          shortDescription="A social networking and activity tracking platform for endurance sports enthusiasts, offering user login, interaction features, performance scoring for each sport, and integration with APIs like Strava, Google Login, SendGrid, and AWS Lambda."
          description={`An interactive platform for endurance sports enthusiasts that combines social networking with activity tracking.\n Users can log in, connect with others, track their performance across various sports, and view personalized performance scores, fostering an engaging and competitive environment.`}
          projectType="Fullstack"
          live="https://www.prtrack.live/"
          tools={[
            'Next.JS',
            'React.JS',
            'Typescript',
            'TailwindCSS',
            'ContextAPI',
            'AWS',
            'PrismaORM',
            'Jest',
            'Terraform',
            'Cypress',
            'Figma',
          ]}
        />

        <PortfolioGroup
          className="mt-20"
          printscreen={PortfolioPrint}
          title="Portfolio"
          shortDescription="I built this portfolio to seek opportunities and showcase all the tools I use or have used throughout my years as a web developer."
          description={`Showcase your front-end expertise with a portfolio that highlights your ability to create intuitive and visually appealing web interfaces. Demonstrate your mastery of modern frameworks like React and Next.js, along with your proficiency in CSS and HTML. Let your portfolio be your digital resume, attracting potential employers and clients alike.`}
          projectType="Fullstack"
          live="https://portifolio-teizen.vercel.app/"
          githubLink="https://github.com/andreteizen/Portifolio"
          tools={[
            'Next.JS',
            'React.JS',
            'Typescript',
            'TailwindCSS',
            'ESLint',
            'Figma',
            'Framer Motion',
          ]}
        />

        <PortfolioGroup
          className="mt-20"
          printscreen={HilinkPrint}
          title="Hilink"
          shortDescription="I built this platform to learn and master tools such as Next.js, Tailwind, and Framer Motion."
          description={`Fuel your wanderlust with our interactive travel platform. Find the perfect route, connect with like-minded travelers, and share your adventures. Whether you're seeking off-the-beaten-path experiences or well-trodden paths, we've got you covered.`}
          projectType="Front-end"
          live="https://travel-app-red-eta.vercel.app/"
          githubLink="https://github.com/andreteizen/travel_app"
          tools={[
            'Next.JS',
            'React.JS',
            'Typescript',
            'TailwindCSS',
            'ESLint',
            'Figma',
            'Framer Motion',
          ]}
        />

        <PortfolioGroup
          className="mt-20"
          printscreen={CarhubPrint}
          title="CarHub"
          shortDescription="I built this platform to learn and master tools such as Next.js, Tailwind, and Framer Motion."
          description={`Save time and money when renting a car. With our comparator, you can easily find the vehicle that best suits your travel style and budget. In addition, we offer a wide variety of vehicles, from economy to luxury, so you can choose what best meets your needs.`}
          projectType="Front-end"
          live="https://car-showcase-two-mu.vercel.app/"
          githubLink="https://github.com/andreteizen/Car-showcase"
          tools={[
            'Next.JS',
            'React.JS',
            'Typescript',
            'TailwindCSS',
            'ESLint',
            'Figma',
            'Framer Motion',
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
