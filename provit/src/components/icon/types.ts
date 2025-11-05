// 기본 아이콘 props - size와 className만 있는 경우
export interface IconProps {
  size?: number;
  className?: string;
}

export interface SelectableIconProps extends IconProps {
  isSelected?: boolean;
}

export interface ChevronIconProps extends IconProps {
  rotation?: 0 | 90 | 180 | 270;
}

export interface LogoProps {
  size?: number;
}