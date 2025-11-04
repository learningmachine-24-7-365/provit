'use client';

interface ChevronIconProps {
  size?: number;
  className?: string;
  rotation?: 0 | 90 | 180 | 270;
}

export default function ChevronIcon({ size = 16, className, rotation = 0 }: ChevronIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <g clipPath="url(#clip0_9419_7440)">
        <path 
          d="M4 6L8 10L12 6" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9419_7440">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}