'use client';

import { SelectableIconProps } from './types';

export default function ReportIcon({ size = 24, className, isSelected = false }: SelectableIconProps) {
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
        <g clipPath="url(#clip0_11581_15259)">
          <path d="M13.25 7C13.25 7.46413 13.4345 7.90912 13.7627 8.2373C14.0909 8.56549 14.5359 8.75 15 8.75H19.75V19C19.75 19.7293 19.4601 20.4286 18.9443 20.9443C18.4286 21.4601 17.7293 21.75 17 21.75H7C6.27065 21.75 5.57139 21.4601 5.05566 20.9443C4.53994 20.4286 4.25 19.7293 4.25 19V5C4.25 4.27065 4.53994 3.57139 5.05566 3.05566C5.57139 2.53994 6.27065 2.25 7 2.25H13.25V7ZM11.25 9.30957C10.2682 9.46667 9.35364 9.92956 8.6416 10.6416C7.7508 11.5324 7.25 12.7402 7.25 14L7.25586 14.2354C7.31406 15.4094 7.80643 16.5232 8.6416 17.3584C9.5324 18.2492 10.7402 18.75 12 18.75C13.2598 18.75 14.4676 18.2492 15.3584 17.3584C16.0704 16.6464 16.5324 15.7317 16.6895 14.75H12C11.5858 14.75 11.25 14.4142 11.25 14V9.30957ZM12.75 13.25H16.6895C16.5323 12.2683 16.0704 11.3536 15.3584 10.6416C14.6464 9.9296 13.7317 9.46764 12.75 9.31055V13.25ZM19.3105 7.25H15C14.9337 7.25 14.8701 7.22364 14.8232 7.17676C14.7764 7.12987 14.75 7.0663 14.75 7V2.68945L19.3105 7.25Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_11581_15259">
            <rect width="24" height="24" fill="white" />
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
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}