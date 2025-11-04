export interface MenuItemProps {
    icon: React.ComponentType<{ isSelected?: boolean; }>;
    label: string;
    href: string;
    subActions?: React.ReactNode;
}