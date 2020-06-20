import React, { ReactElement, memo } from 'react'

interface SearchIconProps {
  color: string;
  width: string;
  height: string;
}

function SearchIcon(props: SearchIconProps): ReactElement {
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
        d="M19.71 18.296l7.522 7.523-1.413 1.413-7.523-7.522c0.52-0.424 0.99-0.895 1.414-1.414zM4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8s-8-3.589-8-8zM30.002 25.759l-9.168-9.166c0.72-1.381 1.166-2.927 1.166-4.592 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.523 4.477 10 10 10 1.665 0 3.211-0.445 4.592-1.166l9.166 9.168 4.244-4.244z"
      />
    </svg>
  )
}

export default memo(SearchIcon)