'use client'

import { useState } from 'react'
import { Button } from '../../ButtonTabsV'
import Cards from './Card'
import ReactImg from '@public/Icons/react.svg'
import NextImg from '@public/Icons/next.svg'
import TypescriptImg from '@public/Icons/typescript.png'
import TailwindImg from '@public/Icons/tailwind.svg'

import StyledComponentsImg from '@public/Icons/styled-components.png'
import ReduxImg from '@public/Icons/redux.png'
import MaterialUiImg from '@public/Icons/material-ui.png'
import GraphQLImg from '@public/Icons/graphql.png'
import JestImg from '@public/Icons/jest.png'
import CypressImg from '@public/Icons/cypress.png'
import EslintImg from '@public/Icons/ESLint_logo.svg'

import NodeImg from '@public/Icons/nodejs.svg'
import PrismaImg from '@public/Icons/prisma.svg'
import SqlImg from '@public/Icons/sql.png'
import MongodbImg from '@public/Icons/mongodb.png'

import GcpImg from '@public/Icons/gcp.svg'
import KubernetsImg from '@public/Icons/kubernets.svg'
import DockerImg from '@public/Icons/docker.svg'
import AwsImg from '@public/Icons/aws.svg'
import TerraformImg from '@public/Icons/terraform.png'

import FigmaImg from '@public/Icons/figma.svg'
import PhotoshopImg from '@public/Icons/photoshop.svg'

const tabsData = [
  {
    label: 'Front-end',
    content: (
      <div className="flex h-fit w-full flex-col space-y-10">
        <div className="flex w-full justify-between">
          <Cards icon={ReactImg} title="React.JS" proficiency="Experienced" />
          <Cards icon={NextImg} title="Next.JS" proficiency="Experienced" />
          <Cards
            icon={TypescriptImg}
            title="Typescript"
            proficiency="Experienced"
          />
          <Cards
            icon={TailwindImg}
            title="TailwindCSS"
            proficiency="Experienced"
          />
        </div>
        <div className="flex w-full justify-between">
          <Cards
            icon={MaterialUiImg}
            title="Material UI"
            proficiency="Experienced"
          />
          <Cards
            icon={ReactImg}
            title="Context API"
            proficiency="Experienced"
          />
          <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" />
          <Cards icon={ReduxImg} title="Redux" proficiency="Intermediate" />
        </div>
        <div className="flex w-full justify-between">
          <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
          <Cards
            icon={StyledComponentsImg}
            title="Style Components"
            proficiency="Intermediate"
          />
          <Cards
            icon={EslintImg}
            title="ESLint"
            proficiency="Experienced"
            invisible
          />
          <Cards
            icon={EslintImg}
            title="ESLint"
            proficiency="Experienced"
            invisible
          />
        </div>
      </div>
    ),
  },
  {
    label: 'Back-end',
    content: (
      <div className="flex h-fit w-full flex-col space-y-10">
        <div className="flex w-full justify-between">
          <Cards icon={NodeImg} title="NodeJS" proficiency="Experienced" />
          <Cards icon={PrismaImg} title="PrismaORM" proficiency="Experienced" />
          <Cards icon={SqlImg} title="SQL" proficiency="Experienced" />
          <Cards icon={MongodbImg} title="noSQL" proficiency="Experienced" />
        </div>
        <div className="flex w-full justify-start">
          <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
        </div>
      </div>
    ),
  },
  {
    label: 'Infrastructure',
    content: (
      <div className="flex h-fit w-full flex-col space-y-10">
        <div className="flex w-full justify-between">
          <Cards icon={AwsImg} title="AWS" proficiency="Experienced" />
          <Cards icon={MongodbImg} title="MongoDB" proficiency="Experienced" />
          <Cards icon={DockerImg} title="Docker" proficiency="Intermediate" />
          <Cards
            icon={KubernetsImg}
            title="Kubernets"
            proficiency="Intermediate"
          />
        </div>
        <div className="flex w-full justify-between">
          <Cards
            icon={TerraformImg}
            title="Terraform"
            proficiency="Intermediate"
          />
          <Cards icon={GcpImg} title="GCP" proficiency="Junior" />
          <Cards
            icon={EslintImg}
            title="ESLint"
            proficiency="Experienced"
            invisible
          />
          <Cards
            icon={EslintImg}
            title="ESLint"
            proficiency="Experienced"
            invisible
          />
        </div>
      </div>
    ),
  },
  {
    label: 'Web Design',
    content: (
      <div className="flex w-full justify-between">
        <Cards icon={FigmaImg} title="Figma" proficiency="Intermediate" />
        <Cards
          icon={PhotoshopImg}
          title="PhotoShop"
          proficiency="Intermediate"
        />
        <Cards
          icon={EslintImg}
          title="ESLint"
          proficiency="Experienced"
          invisible
        />
        <Cards
          icon={EslintImg}
          title="ESLint"
          proficiency="Experienced"
          invisible
        />
      </div>
    ),
  },
  {
    label: 'Tests',
    content: (
      <div className="flex w-full justify-between">
        <Cards
          icon={JestImg}
          title="Jest (Unit Test)"
          proficiency="Intermediate"
        />
        <Cards
          icon={CypressImg}
          title="Cypress (E2E)"
          proficiency="Intermediate"
        />
        <Cards
          icon={EslintImg}
          title="ESLint"
          proficiency="Experienced"
          invisible
        />
        <Cards
          icon={EslintImg}
          title="ESLint"
          proficiency="Experienced"
          invisible
        />
      </div>
    ),
  },
]

export function TabsTools() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    tabNumber: number,
  ) => {
    e.preventDefault()
    setActiveTabIndex(tabNumber)
  }

  return (
    <div className="m-20 flex h-[20vw] w-full flex-col items-center justify-items-stretch px-10">
      <div className="flex h-fit w-[60%] flex-row justify-between space-x-5">
        {tabsData.map((tab, idx) => (
          <Button
            key={idx}
            className="px-10 py-2 text-lg"
            active={activeTabIndex === idx}
            onClick={(e) => handleClick(e, idx)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <hr className="solid border-primary-color mb-20 mt-10 w-[80%] border" />

      <div className="w-3/4 py-4">{tabsData[activeTabIndex].content}</div>
    </div>
  )
}
