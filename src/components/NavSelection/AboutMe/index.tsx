'use client'

import { useState } from 'react'
import { Button } from '../../ButtonTabsH'
import Link from 'next/link'

const tabsData = [
  {
    label: 'Who I am',
    content: (
      <div>
        <p>
          Hello, I{"'"}m André! {':)'}
          <br />
          <br />
          I am passionate about technology and nature. I have traveled through
          19 states in Brazil and visited countries like Chile, Argentina, and
          Uruguay. <br />
          <br />
          In each place I visited, I worked on permaculture projects and took on
          freelance work building websites. I love exploring the fauna and flora
          of the regions I visit and dream of one day combining technology and
          nature in a sustainable and conscious consumption project. <br />
          Today, I am more settled in one place and looking for projects that I
          feel connected to or companies with inspiring projects to work on.{' '}
          <br />
          <br />
          I enjoy hearing all kinds of ideas. If you believe I could help in
          some way, feel free to reach out by clicking on any of the icons
          below! <br />
          <br />
        </p>
      </div>
    ),
  },
  {
    label: 'Education',
    content: (
      <div>
        <p>
          I come from the interior of Brazil, from a city called Bauru in the
          state of São Paulo. <br />
          <br />
          From a young age, I have been passionate about technology and video
          games, growing up alongside the development of computers. During high
          school, I pursued a technical course in electronics at{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/school/cti-bauru/"
            className="font-semibold"
          >
            CTI
          </Link>
          . At the age of 19, I began studying mechatronics engineering at{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/school/ufsc/"
            className="font-semibold"
          >
            UFSC (Federal University of Santa Catarina)
          </Link>
          , but later switched my major to Computational Physics at{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/school/uspoficial/"
            className="font-semibold"
          >
            USP (University of Sao Paulo)
          </Link>
          . Throughout both programs, I gained significant experience in
          programming and decided to pursue a career in this field even before
          completing my degree. <br />
          <br />
          In 2020, I participated in several hackathons, placing sixth in
          Sancathon and first in the Bocom BBM Bank Hackathon. This first-place
          achievement led me to establish my first company,
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/exploitcapital/"
            className="font-semibold"
          >
            Exploit Capital
          </Link>
          , where I worked for nearly a year and a half before deciding to
          explore a different path. <br />
          <br />
          After leaving my company, I joined{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/gruporecovery/"
            className="font-semibold"
          >
            Grupo Recovery
          </Link>{' '}
          as a data scientist, where I worked for almost a year and a half.
          Following this role, I began traveling and working as a freelancer
          (see below for more details on the projects I{"'"}ve completed).
        </p>
      </div>
    ),
  },
  {
    label: 'Experience',
    content: (
      <div>
        I have over 5 years of experience working as a web developer in
        companies like{' '}
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/moovefy/"
          className="font-semibold"
        >
          Moovefy
        </Link>
        ,{' '}
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/wiser-educa%C3%A7%C3%A3o/"
          className="font-semibold"
        >
          Wiser
        </Link>
        , and{' '}
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/petloyalty/"
          className="font-semibold"
        >
          ShelterBuddy (formerly Pet Loyalty)
        </Link>
        . I also have experience in the data field, having worked for over 2
        years as a Data Scientist at{' '}
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/gruporecovery/"
          className="font-semibold"
        >
          Grupo Recovery
        </Link>
        .<br />
        <br />
        Today, I am focused on joining and learning about new projects. That
        {"'"}s why I am launching this portfolio, to showcase some of what I
        {"'"}ve learned over the years, seek new opportunities, and connect with
        inspiring people.
      </div>
    ),
  },
]

export function TabsAboutMe() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    tabNumber: number,
  ) => {
    e.preventDefault()
    console.log(tabNumber)
    setActiveTabIndex(tabNumber)
  }

  return (
    <div className="m-20 flex h-[20vw] w-3/4 flex-row items-center justify-items-stretch px-10">
      <div className="flex h-full w-fit flex-col justify-center space-y-5">
        {tabsData.map((tab, idx) => (
          <Button
            key={idx}
            className="px-4 py-1"
            active={activeTabIndex === idx}
            onClick={(e) => handleClick(e, idx)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <hr className="solid border-primary-color mx-48 h-full border-2" />

      <div className="w-3/4 py-4">{tabsData[activeTabIndex].content}</div>
    </div>
  )
}
