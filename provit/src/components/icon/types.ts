// 기본 아이콘 props - size와 className만 있는 경우
export interface IconProps {
  size?: number;
  className?: string;
}

// 선택 가능한 아이콘 props - isSelected가 추가로 있는 경우
export interface SelectableIconProps extends IconProps {
  isSelected?: boolean;
}

// ChevronIcon 전용 props - rotation이 추가로 있는 경우
export interface ChevronIconProps extends IconProps {
  rotation?: 0 | 90 | 180 | 270;
}

// Logo 전용 props - size만 있는 경우
export interface LogoProps {
  size?: number;
}
