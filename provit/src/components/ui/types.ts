export interface MenuItemProps {
    icon: React.ComponentType<{ isSelected?: boolean; }>;
    label: string;
    href: string;
    subActions?: React.ReactNode;
}
export interface ActionButtonProps {
    onClick?: () => void;
    label?: string;
    icon: React.ComponentType<any>;
}