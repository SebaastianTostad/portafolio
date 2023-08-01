import React from 'react'

import { motion } from 'framer-motion'
export default function AnimatedTextCharacter(props) {
  const words = Array.from(props.text)
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,

      },
    },
  }
  return (
    <motion.span
      key={props.text} // Reset animation when text changes
      style={{ fontSize: '1.5rem', color: '#B5C2A1' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
