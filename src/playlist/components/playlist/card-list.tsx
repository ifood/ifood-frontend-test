import * as React from 'react'
import { Stack, Box } from '@chakra-ui/core'
import { motion } from 'framer-motion'

import { PlaylistRoot, Item } from 'shared/types/playlist'
import { useWindowSize } from 'shared/hooks/useWindowSize'

import Card from './card'

function getWidth(items: Item[]) {
  const totalHeight = items.length * 300
  const totalPadding = (items.length - 1) * 30
  const totalScroll = totalHeight + totalPadding
  return totalScroll
}

function Slider({
  children,
  totalWidth,
  sizeWindow
}: {
  children: React.ReactNode
  totalWidth: number
  sizeWindow: {
    width?: number
    height?: number
  }
}) {
  let windownWidthSlider = 0
  if (typeof sizeWindow.width === 'number') {
    windownWidthSlider = sizeWindow.width
  }

  return (
    <motion.div
      style={{
        cursor: 'grab',
        width: '100vw'
      }}
      drag="x"
      dragConstraints={{
        left: -totalWidth + windownWidthSlider,
        right: 0
      }}
    >
      {children}
    </motion.div>
  )
}

export default function CardList({ data }: { data: PlaylistRoot | undefined }) {
  const { items = [] } = data?.playlists ?? {}
  const size = useWindowSize()

  const totalWidth = getWidth(items)
  const hasitem = items && Array.isArray(items) && items.length > 0
  const ComponentWrapper = totalWidth || hasitem ? Slider : 'div'

  return (
    <ComponentWrapper totalWidth={totalWidth} sizeWindow={size}>
      {hasitem ? (
        <Stack
          isInline
          listStyleType="none"
          role="list"
          aria-labelledby="Items playlist"
        >
          {items.map((item: Item) => (
            <Card key={item.id} {...{ item }} />
          ))}
        </Stack>
      ) : (
        <Box width={300} height={300}>
          nada encontrado
        </Box>
      )}
    </ComponentWrapper>
  )
}
