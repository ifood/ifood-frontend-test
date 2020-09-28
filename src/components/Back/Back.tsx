import React from 'react';

interface Back {
  width: number,
  height: number,
  className?: string,
  onClick: Function
}

export const Back: React.FC<Back> = ({ width, height, className = '', onClick }) => (
  <svg viewBox="0 0 100 100" width={width} height={height} onClick={() => onClick()} className={className}>
    <defs>
      <clipPath id="_clipPath_H57vw0ItnefVW9VsGaQPRk3UqDZ13WvD">
        <rect width="100" height="100"/>
      </clipPath>
    </defs>
    <g clipPath="url(#_clipPath_H57vw0ItnefVW9VsGaQPRk3UqDZ13WvD)">
      <g>
        <g>
          <path d=" M 50 1.852 L 50 1.852 C 76.591 1.852 98.148 23.409 98.148 50 L 98.148 50 C 98.148 76.591 76.591 98.148 50 98.148 L 50 98.148 C 23.409 98.148 1.852 76.591 1.852 50 L 1.852 50 C 1.852 23.409 23.409 1.852 50 1.852 Z " fill="rgb(79,186,111)"/>
        </g>
      </g>
      <g>
        <path d=" M 48.929 50.015 L 65.198 35.4 C 66.025 34.658 66.437 33.751 66.437 32.678 C 66.437 31.606 66.025 30.699 65.198 29.957 L 62.688 27.701 C 61.863 26.96 60.852 26.589 59.659 26.589 C 58.465 26.589 57.455 26.96 56.629 27.701 L 34.801 47.278 C 33.975 48.02 33.563 48.927 33.563 50 C 33.563 51.073 33.975 51.979 34.801 52.721 L 56.629 72.298 C 57.455 73.04 58.465 73.411 59.659 73.411 C 60.852 73.411 61.863 73.04 62.688 72.298 L 65.198 70.043 C 66.025 69.302 66.437 68.399 66.437 67.336 C 66.437 66.274 66.025 65.362 65.198 64.6 L 48.929 50.015 Z " fill="rgb(46,46,46)"/>
      </g>
    </g>
  </svg>
);
