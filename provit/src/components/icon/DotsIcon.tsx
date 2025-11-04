'use client';

interface DotsIconProps {
  size?: number;
  className?: string;
}

export default function DotsIcon({ size = 20, className }: DotsIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_9421_7764)">
        <path 
          d="M9.1665 9.99996C9.1665 10.221 9.2543 10.4329 9.41058 10.5892C9.56686 10.7455 9.77882 10.8333 9.99984 10.8333C10.2209 10.8333 10.4328 10.7455 10.5891 10.5892C10.7454 10.4329 10.8332 10.221 10.8332 9.99996C10.8332 9.77895 10.7454 9.56698 10.5891 9.4107C10.4328 9.25442 10.2209 9.16663 9.99984 9.16663C9.77882 9.16663 9.56686 9.25442 9.41058 9.4107C9.2543 9.56698 9.1665 9.77895 9.1665 9.99996Z" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M9.1665 15.8333C9.1665 16.0543 9.2543 16.2663 9.41058 16.4226C9.56686 16.5789 9.77882 16.6667 9.99984 16.6667C10.2209 16.6667 10.4328 16.5789 10.5891 16.4226C10.7454 16.2663 10.8332 16.0543 10.8332 15.8333C10.8332 15.6123 10.7454 15.4004 10.5891 15.2441C10.4328 15.0878 10.2209 15 9.99984 15C9.77882 15 9.56686 15.0878 9.41058 15.2441C9.2543 15.4004 9.1665 15.6123 9.1665 15.8333Z" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M9.1665 4.16671C9.1665 4.38772 9.2543 4.59968 9.41058 4.75596C9.56686 4.91224 9.77882 5.00004 9.99984 5.00004C10.2209 5.00004 10.4328 4.91224 10.5891 4.75596C10.7454 4.59968 10.8332 4.38772 10.8332 4.16671C10.8332 3.94569 10.7454 3.73373 10.5891 3.57745C10.4328 3.42117 10.2209 3.33337 9.99984 3.33337C9.77882 3.33337 9.56686 3.42117 9.41058 3.57745C9.2543 3.73373 9.1665 3.94569 9.1665 4.16671Z" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9421_7764">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}