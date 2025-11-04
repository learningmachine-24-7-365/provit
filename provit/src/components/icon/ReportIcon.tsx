'use client';

interface ReportIconProps {
  size?: number;
  className?: string;
  isSelected?: boolean;
}

export default function ReportIcon({ size = 24, className, isSelected = false }: ReportIconProps) {
  if (isSelected) {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_11569_15228)">
          <path 
            d="M12.75 2.25C13.0261 2.25 13.25 2.47386 13.25 2.75V7C13.25 7.46413 13.4345 7.90912 13.7627 8.2373C14.0909 8.56549 14.5359 8.75 15 8.75H19.25C19.5261 8.75 19.75 8.97386 19.75 9.25V19C19.75 19.7293 19.4601 20.4286 18.9443 20.9443C18.4286 21.4601 17.7293 21.75 17 21.75H7C6.27065 21.75 5.57139 21.4601 5.05566 20.9443C4.53994 20.4286 4.25 19.7293 4.25 19V5C4.25 4.27065 4.53994 3.57139 5.05566 3.05566C5.57139 2.53994 6.27065 2.25 7 2.25H12.75ZM11.0654 9.99902C10.3319 10.173 9.65408 10.5472 9.1123 11.0889C8.34336 11.8578 7.91119 12.9008 7.91113 13.9883L7.91602 14.1914C7.96628 15.2049 8.3914 16.1668 9.1123 16.8877C9.8813 17.6567 10.9242 18.0889 12.0117 18.0889C13.0992 18.0888 14.1422 17.6567 14.9111 16.8877C15.4528 16.346 15.826 15.668 16 14.9346H12.0117C11.4891 14.9346 11.0654 14.5109 11.0654 13.9883V9.99902ZM12.958 13.042H16C15.8259 12.3086 15.4528 11.6305 14.9111 11.0889C14.3694 10.5471 13.6915 10.173 12.958 9.99902V13.042ZM14.75 3.89648C14.7501 3.4511 15.2885 3.22806 15.6035 3.54297L18.457 6.39648C18.7719 6.71145 18.5489 7.24994 18.1035 7.25H15C14.9337 7.25 14.8701 7.22364 14.8232 7.17676C14.7764 7.12987 14.75 7.0663 14.75 7V3.89648Z" 
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_11569_15228">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_11569_15200)">
        <path 
          d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12 10V14H16" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M8 14C8 15.0609 8.42143 16.0783 9.17157 16.8284C9.92172 17.5786 10.9391 18 12 18C13.0609 18 14.0783 17.5786 14.8284 16.8284C15.5786 16.0783 16 15.0609 16 14C16 12.9391 15.5786 11.9217 14.8284 11.1716C14.0783 10.4214 13.0609 10 12 10C10.9391 10 9.92172 10.4214 9.17157 11.1716C8.42143 11.9217 8 12.9391 8 14Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11569_15200">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}