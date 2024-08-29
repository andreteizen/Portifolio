"use client"

import { ReactNode, useState } from "react"
import { Button } from "../../ButtonTabsV"
import Link from "next/link";
import Cards from "./Card";
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

import GcpImg from '@public/Icons/gcp.svg'
import KubernetsImg from '@public/Icons/kubernets.svg'
import DockerImg from '@public/Icons/docker.svg'
import AwsImg from '@public/Icons/aws.svg'

import FigmaImg from '@public/Icons/figma.svg'
import PhotoshopImg from '@public/Icons/photoshop.svg'



const tabsData = [
  {
    label: "Front-end",
    content:
      <div className="w-full h-fit flex flex-col space-y-10">
        <div className="flex w-full justify-between">
          <Cards icon={ReactImg} title="React.JS" proficiency="Experienced" />
          <Cards icon={NextImg} title="Next.JS" proficiency="Experienced" />
          <Cards icon={TypescriptImg} title="Typescript" proficiency="Experienced" />
          <Cards icon={TailwindImg} title="TailwindCSS" proficiency="Experienced" />
        </div>
        <div className="flex w-full justify-between">
          <Cards icon={StyledComponentsImg} title="Style Components" proficiency="Intermediate" />
          <Cards icon={ReduxImg} title="Redux" proficiency="Intermediate" />
          <Cards icon={MaterialUiImg} title="Material UI" proficiency="Experienced" />
          <Cards icon={ReactImg} title="Context API" proficiency="Experienced" />
        </div>
        <div className="flex w-full justify-between">
          <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
          <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" />
          <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
          <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
        </div>
      </div>,

  },
  {
    label: "Back-end",
    content:
    <div className="flex w-full justify-between">
      <Cards icon={NodeImg} title="NodeJS" proficiency="Experienced" />
      <Cards icon={GraphQLImg} title="GraphQL" proficiency="Intermediate" />
      <Cards icon={PrismaImg} title="PrismaORM" proficiency="Experienced" />
      <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
    </div>,
  },
  {
    label: "Infrastructure",
    content:
    <div className="flex w-full justify-between">
      <Cards icon={AwsImg} title="AWS" proficiency="Experienced" />
      <Cards icon={DockerImg} title="Docker" proficiency="Intermediate" />
      <Cards icon={KubernetsImg} title="Kubernets" proficiency="Intermediate" />
      <Cards icon={GcpImg} title="GCP" proficiency="Junior" />
    </div>,
  },
  {
    label: "Web Design",
    content:
    <div className="flex w-full justify-between">
      <Cards icon={FigmaImg} title="Figma" proficiency="Intermediate" />
      <Cards icon={PhotoshopImg} title="PhotoShop" proficiency="Intermediate" />
      <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
      <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
    </div>,
  },
  {
    label: "Testes",
    content:

      <div className="flex w-full justify-between">
        <Cards icon={JestImg} title="Jest (TDD)" proficiency="Intermediate" />
        <Cards icon={CypressImg} title="Cypress (E2E)" proficiency="Intermediate" />
        <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
        <Cards icon={EslintImg} title="ESLint" proficiency="Experienced" invisible />
      </div>,
  },
];

export function TabsTools() {

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleClick = (e: any, tabNumber: number) => {
    e.preventDefault();
    setActiveTabIndex(tabNumber);
  };


  return (
    <div className="flex flex-col justify-items-stretch w-full  px-10 m-20 h-[20vw] items-center">
      <div className="flex flex-row w-[60%] h-fit space-x-5 justify-between">
        {tabsData.map((tab, idx) => (
          <Button
            key={idx}
            className="px-10 py-2 text-lg"
            active={activeTabIndex === idx}
            onClick={e => handleClick(e, idx)}
          >
            {tab.label}
          </Button>
        ))}

      </div>

      <hr className="solid border-primary-color w-[80%] border mt-10 mb-20" />

      <div className="py-4 w-3/4">
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  )
}

