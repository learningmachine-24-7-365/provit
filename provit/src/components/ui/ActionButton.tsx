'use client';

import { ACTION_BUTTON_CONTAINER, ACTION_BUTTON_HOVER } from "@/constants/styles";
import { ActionButtonProps } from "./types";

export default function ActionButton({ onClick, label, icon: Icon }: ActionButtonProps) {
  return (
    <button className={`${ACTION_BUTTON_CONTAINER} p-2 flex gap-1 text-[13px] rounded-[12px] ${ACTION_BUTTON_HOVER}`} onClick={onClick}>
      {Icon && <Icon />}
      {label && label}
    </button>
  );
}
