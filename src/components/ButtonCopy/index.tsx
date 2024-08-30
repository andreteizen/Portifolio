'use client'

import { useState } from 'react' // Importe o componente Button do seu projeto
import { Button } from '../ButtonTabsH'
import { twMerge } from 'tailwind-merge'

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    const email = 'andre.teizen@gmail.com' // Substitua pelo seu email
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true) // Muda o estado para indicar que foi copiado
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <Button
      id="CopyEmail"
      key="CopyEmail"
      styleType="filled"
      className={twMerge(
        'px-4',
        copied === true ? 'border-green-400 bg-green-400' : '',
      )}
      onClick={handleCopyEmail}
    >
      {copied ? 'Copied!' : 'Copy email'}
    </Button>
  )
}
