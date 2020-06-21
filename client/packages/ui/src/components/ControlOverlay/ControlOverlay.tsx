import React, { ReactElement, ReactNode, memo } from 'react'
import { CloseIcon } from '../CloseIcon'
import { ButtonType } from '../Button'
import {
  FiltersOverlayContainer,
  UpperControlSection,
  FiltersSection,
  LowerControlSection
} from './styles'

export interface ControlOverlayProps {
  show?: boolean;
  onClose?: () => void;
  actionButton?: ReactElement<ButtonType>;
  children: ReactNode;
  palette?: {
    primary: string;
    secondary: string;
  };
}

function ControlOverlay(props: ControlOverlayProps): ReactElement {
  const {
    onClose,
    show = false,
    actionButton,
    children,
    palette = {
      primary: '#666',
      secondary: '#fff'
    }
  } = props

  return (
    <FiltersOverlayContainer show={show}>
      <UpperControlSection>
        <div onClick={onClose}>
          <CloseIcon
            width="18px"
            height="18px"
            color={palette.primary}
          />
        </div>
      </UpperControlSection>
      <FiltersSection>
        {children}
      </FiltersSection>
      {actionButton && (
        <LowerControlSection>
          {actionButton}
        </LowerControlSection>
      )}
    </FiltersOverlayContainer>
  )
}

export default memo(ControlOverlay)
