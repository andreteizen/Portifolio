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

import PysparkImg from '@public/Icons/pyspark.png'
import PythonImg from '@public/Icons/python.png'
import PandasImg from '@public/Icons/pandas.png'
import DatabricksImg from '@public/Icons/databricks.png'

const tabsData = [
  {
    label: 'Front-end',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        <Cards
          icon={MaterialUiImg}
          title="Material UI"
          proficiency="Experienced"
          className="whitespace-nowrap"
        />
        <Cards
          icon={ReactImg}
          title="Context API"
          proficiency="Experienced"
          className="whitespace-nowrap"
        />
        <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" />
        <Cards icon={ReduxImg} title="Redux" proficiency="Intermediate" />
        <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
        <Cards
          icon={StyledComponentsImg}
          title="Style Components"
          proficiency="Intermediate"
        />
      </div>
    ),
  },
  {
    label: 'Back-end',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Cards icon={NodeImg} title="NodeJS" proficiency="Experienced" />
        <Cards icon={PrismaImg} title="PrismaORM" proficiency="Experienced" />
        <Cards icon={SqlImg} title="SQL" proficiency="Experienced" />
        <Cards icon={MongodbImg} title="noSQL" proficiency="Experienced" />
        <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
      </div>
    ),
  },
  {
    label: 'Infrastructure',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Cards icon={AwsImg} title="AWS" proficiency="Experienced" />
        <Cards icon={MongodbImg} title="MongoDB" proficiency="Experienced" />
        <Cards icon={DockerImg} title="Docker" proficiency="Intermediate" />
        <Cards
          icon={KubernetsImg}
          title="Kubernets"
          proficiency="Intermediate"
        />
        <Cards
          icon={TerraformImg}
          title="Terraform"
          proficiency="Intermediate"
        />
        <Cards icon={GcpImg} title="GCP" proficiency="Junior" />
      </div>
    ),
  },
  {
    label: 'Web Design',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        <Cards icon={FigmaImg} title="Figma" proficiency="Intermediate" />
        <Cards
          icon={PhotoshopImg}
          title="PhotoShop"
          proficiency="Intermediate"
        />
      </div>
    ),
  },
  {
    label: 'Tests',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>
    ),
  },
  {
    label: 'Data',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Cards icon={PythonImg} title="Python" proficiency="Experienced" />
        <Cards icon={PandasImg} title="Pandas" proficiency="Intermediate" />
        <Cards icon={PysparkImg} title="PySpark" proficiency="Intermediate" />
        <Cards
          icon={DatabricksImg}
          title="Databricks"
          proficiency="Intermediate"
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
    <>
      <div className="md:m-20 hidden md:flex h-[20vw] w-full flex-col items-center md:justify-items-stretch md:px-10">
        <div className="flex h-fit md:w-fit flex-row justify-between space-x-5">
          {tabsData.map((tab, idx) => (
            <Button
              key={idx}
              className="px-10 py-2 text-lg whitespace-nowrap"
              active={activeTabIndex === idx}
              onClick={(e) => handleClick(e, idx)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <hr className="hidden md:block solid border-primary-color mb-20 mt-10 w-[80%] border" />

        <div className="w-3/4 py-4">{tabsData[activeTabIndex].content}</div>
      </div>

      <div className="flex flex-col md:hidden">
        {tabsData.map((tab, idx) => (
          <div key={idx}>
            <h1 className="px-10 py-2 text-xl font-semibold text-center mt-10 mb-4">
              {tab.label}
            </h1>
            <div>{tabsData[idx].content}</div>
          </div>
        ))}
      </div>
    </>
  )
}
