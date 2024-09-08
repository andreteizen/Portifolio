'use client'

import { motion } from 'framer-motion'

export function DevelopmentBanner() {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-primary-color/60 py-2 w-full h-11 text-center">
      <motion.div
        className="flex whitespace-nowrap text-black font-semibold w-full justify-between"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
          delay: 0,
        }}
      >
        {/* Texto duplicado para efeito contínuo */}
        <span className="mr-10">
          Este site está em desenvolvimento! 🚧 Novas atualizações em breve.
        </span>
        <span className="mr-10">
          Este site está em desenvolvimento! 🚧 Novas atualizações em breve.
        </span>
      </motion.div>
    </div>
  )
}
