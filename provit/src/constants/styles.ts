// 배경색  
export const CARD_BG_COLOR = 'bg-white dark:bg-gray-900'
export const BG_COLOR = 'bg-gray-50 dark:bg-black'
export const ACTION_BUTTON_HOVER = 'dark:hover:bg-gray-900 hover:bg-gray-100 transition-colors duration-200'

// 테두리 색
export const BORDER_COLOR = 'border-gray-100 dark:border-gray-800'

// 높이 및 너비
export const ACTION_BUTTON_CONTAINER = 'min-h-10 min-w-10'
export const TOOLBAR_MIN_HEIGHT = 'min-h-14'
export const CONTAINER = 'flex-1 overflow-y-auto'

// 그림자 스타일
export const CARD_SHADOW = 'shadow-sm shadow-black/5'
export const BUTTON_SHADOW = 'shadow-xs shadow-black/5'

// 폰트 스타일
export const SELECTABLE_FONT = (isSelected: boolean) => isSelected ? `font-semibold ${TEXT_COLOR}` : `font-medium text-gray-500`
export const TEXT_COLOR = 'text-black dark:text-white'