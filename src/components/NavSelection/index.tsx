"use client"

import { ReactNode, useState } from "react"
import { Button } from "../Button"


const tabsData = [
  {
    label: "Who I am",
    content:
      <div>Teste</div>,
  },
  {
    label: "Education",
    content:
      <div>Teste</div>,
  },
  {
    label: "Experience",
    content:
      <div>Teste</div>,
  },
  {
    label: "About me",
    content:
      <div>Teste</div>,
  },
];

export function Tabs() {

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleClick = (e: any, tabNumber: number) => {
    e.preventDefault();
    console.log(tabNumber)
    setActiveTabIndex(tabNumber);
  };


  return (
    <div className="flex flex-row justify-items-stretch w-full px-10 m-20 h-[20vw] items-center">
      <div className="flex flex-col w-[18rem] h-full px-16 space-y-5 justify-center">
        {tabsData.map((tab, idx) => (
          <Button 
            key={idx}
            active={activeTabIndex === idx}
            onClick={e => handleClick(e, idx)}
          >
            {tab.label}
          </Button>
        ))}
        
      </div>

      <hr className="solid border-primary-color h-full border-2 mx-10" />

      <div className="py-4">
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  )
}

