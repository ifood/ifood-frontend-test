import React, { ReactElement, ReactNode, memo } from 'react'
import { CloseIcon } from '../CloseIcon'
import {
  FiltersOverlayContainer,
  UpperControlSection,
  FiltersSection,
  LowerControlSection,
  ActionButton
} from './styles'

export interface ControleOverlayProps {
  show?: boolean;
  onClose?: () => void;
  onAction?: () => void;
  children: ReactNode;
  actionButtonText?: string;
  palette?: {
    primary: string;
    secondary: string;
  };
}

function ControleOverlay(props: ControleOverlayProps): ReactElement {
  const {
    onClose,
    onAction,
    show = false,
    actionButtonText,
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
      {actionButtonText && onAction && (
        <LowerControlSection>
          <ActionButton
            onClick={onAction}
            primaryColor={palette.primary}
            secondaryColor={palette.secondary}
          >
            {actionButtonText}
          </ActionButton>
        </LowerControlSection>
      )}
    </FiltersOverlayContainer>
  )
}

export default memo(ControleOverlay)
