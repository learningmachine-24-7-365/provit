'use client';

import Link from "next/link";
import { MATCH_PATHNAME } from "@/constants/constants";
import { ACTION_BUTTON_CONTAINER, ACTION_BUTTON_HOVER, BORDER_COLOR, CARD_BG_COLOR, SELECTABLE_FONT } from "@/constants/styles";
import type { MenuItemProps } from "./types";

export default function MenuItem({ icon: IconComponent, label, href, subActions }: MenuItemProps) {
    const isActive = MATCH_PATHNAME(href);

    return (
        <Link href={href} className={`flex rounded-[12px] ${ACTION_BUTTON_HOVER} flex-row gap-1 ${ACTION_BUTTON_CONTAINER} ${isActive && CARD_BG_COLOR} text-[13px] ${SELECTABLE_FONT(isActive)}`}>
            <div className={`${ACTION_BUTTON_CONTAINER} flex items-center p-2 gap-1`}>
                <IconComponent isSelected={isActive} />
                {label}
            </div>
            {subActions && (
                <>
                    <div className={`${BORDER_COLOR} w-px h-6`} />
                    <div className="py-1 px-2 gap-1 flex items-center">
                        {subActions}
                    </div>
                </>
            )}
        </Link>
    )
}