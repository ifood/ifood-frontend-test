import React, { ReactNode, useCallback, ReactElement, useMemo } from 'react'
import { Container } from './styles'
import { Text } from '../Text'

interface Palette {
  primary: string;
  secondary: string;
}

export interface ContainerProps {
  palette?: Palette;
  hoverPalette?: Palette;
  active?: boolean;
}

interface TagProps extends ContainerProps {
  children?: ReactNode;
  value: any;
  onClick: (item: any) => void;
}

export default function Tag(props: TagProps): ReactElement {
  const {
    children,
    value,
    onClick,
    active = false,
    hoverPalette
  } = props

  const handleClick = useCallback(
    () => onClick(value),
    [value, onClick]
  )

  const textColor = useMemo(
    (): string | undefined => {
      if (active && hoverPalette) {
        return hoverPalette.primary
      }
    },
    [active, hoverPalette]
  )

  return (
    <Container
      active={active}
      onClick={handleClick}
      hoverPalette={hoverPalette}
    >
      <Text color={textColor}>{children}</Text>
    </Container>
  )
}
