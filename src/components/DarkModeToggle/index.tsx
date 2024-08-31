'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  // Variantes de animação para entrada e saída dos ícones
  const iconVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.8 },
  }

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className="mx-8"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <RiMoonLine size={25} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <RiSunLine size={25} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default DarkModeToggle
