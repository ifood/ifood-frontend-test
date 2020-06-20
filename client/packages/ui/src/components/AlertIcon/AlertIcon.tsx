import React, { ReactElement, memo } from 'react'

interface AlertIconProps {
  color: string;
  width: string;
  height: string;
}

function AlertIcon(props: AlertIconProps): ReactElement {
  const {
    color,
    width,
    height
  } = props
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M7.236 26l8.764-17.527 8.763 17.527zM27.277 26.553l-10.382-20.764c-0.184-0.369-0.539-0.553-0.895-0.553s-0.71 0.184-0.895 0.553l-10.382 20.764c-0.332 0.665 0.152 1.447 0.895 1.447h20.764c0.743 0 1.227-0.782 0.895-1.447zM15 20h2v-6h-2v6zM16 21.802c-0.662 0-1.198 0.536-1.198 1.198s0.537 1.198 1.198 1.198c0.662 0 1.198-0.536 1.198-1.198s-0.537-1.198-1.198-1.198z"
      />
    </svg>
  )
}

export default memo(AlertIcon)