import { usePathname } from "next/navigation";

export const MATCH_PATHNAME = (pathname: string): boolean => usePathname() === pathname;