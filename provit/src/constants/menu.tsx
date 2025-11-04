import { ActionButtonProps, MenuItemProps } from "../components/ui/types";
import { HomeIcon, ReportIcon, TargetIcon, TimelineIcon, AdjustmentIcon, NotificationIcon,  } from "../components/icon";

export const MENU_ITEMS: MenuItemProps[] = [
    {
        icon: HomeIcon,
        label: "대시보드",
        href: "/",
    },
    {
        icon: TargetIcon,
        label: "목표",
        href: "/goals",
    },
    {
        icon: TimelineIcon,
        label: "타임라인",
        href: "/timeline",
    },
    {
        icon: ReportIcon,
        label: "리포트",
        href: "/reports",
    }
]

export const ACTION_ITEMS: ActionButtonProps[] = [
    {
        icon: AdjustmentIcon
    },
    {
        icon: NotificationIcon
    }
]