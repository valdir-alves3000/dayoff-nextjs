"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps {
    children: ReactNode;
    href: string;
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            className={`hover:text-blue-500 font-medium text-sm transition-colors duration-200 ${pathname == href ? "border-b-2 border-blue-500 pb-1 text-blue-500" : "text-gray-500"}`}
            href={href}
        >
            {children}
        </Link>
    );
}