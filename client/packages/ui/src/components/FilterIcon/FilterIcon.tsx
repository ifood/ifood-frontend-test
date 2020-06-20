import React, { ReactElement, memo } from 'react'

interface FilterIconProps {
  color: string;
  width: string;
  height: string;
}

function FilterIcon(props: FilterIconProps): ReactElement {
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
        d="M4.731 1.823l25.376 25.535-2.837 2.82-25.376-25.535 2.837-2.82zM30.418 5.040l-26.079 24.818-2.757-2.898 26.079-24.818 2.758 2.898z"
      />
    </svg>
  )
}

export default memo(FilterIcon)