import * as React from 'react'
import { Box } from '@chakra-ui/core'
import { motion, useMotionValue } from 'framer-motion'

import { Item } from 'shared/types/playlist'

const MotionBox = motion.custom(Box)

const calc = (x: number, y: number, rect: any) => [
  -(y - rect.height / 2) / 60,
  (x - rect.width / 2) / 60
]

export default function Card({ item }: { item: Item }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMouse(event: any) {
    const rect = event.target.getBoundingClientRect()
    const [xPos, yPos] = calc(event.clientX, event.clientY, rect)

    x.set(xPos)
    y.set(yPos)
  }

  function onHoverEnd() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      role="list-item"
      aria-label={item.name}
      whileHover={{
        scale: 1.02,
        translateY: -30,
        boxShadow: '0 35px 80px 0 rgba(97,45,45,0.30)'
      }}
      onHoverEnd={onHoverEnd}
      onMouseMove={handleMouse}
      style={{
        perspective: '900px',
        rotateX: x,
        rotateY: y
      }}
    >
      <MotionBox
        width={300}
        height={300}
        borderRadius="md"
        overflow="hidden"
        mx={3}
        position="relative"
      >
        <Box
          position="absolute"
          zIndex={1}
          top={0}
          left={0}
          bottom={0}
          right={0}
        >
          <Box width="100%" height="100%" position="absolute" />
          <img
            style={{ width: '100%', userSelect: 'none' }}
            src={item.images[0] ? item.images[0].url : ''}
            alt={item.name}
          />
        </Box>
        <Box
          as="p"
          position="absolute"
          bottom={3}
          left={3}
          zIndex={2}
          bg="gray.100"
          color="blue.800"
          px={2}
          py={1}
          fontSize="xs"
        >
          Total de músicas: {item.tracks.total}
        </Box>
      </MotionBox>
    </motion.button>
  )
}
