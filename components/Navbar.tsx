"use client";

import { CircleCheck, List, XCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const items = [
        { tab: "Listings", href: "/", icon: <List /> },
        { tab: "Approved", href: "/approved", icon: <CircleCheck /> },
        { tab: "Rejected", href: "/rejected", icon: <XCircle /> },
    ];
    return (
        <div className="flex flex-col justify-between w-2/12 h-full px-4 bg-hoverGray">
            <div className="top">
                <img
                    src="/logo-white.svg"
                    alt="brand logo"
                    className="h-[24px] mx-auto mt-6 mb-8"
                />
                <ul className="text-xl flex flex-col gap-4">
                    {items.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <li
                                key={item.href}
                                className={`${
                                    active
                                        ? "bg-primaryOrange text-white"
                                        : "text-gray-300 hover:bg-gray-500"
                                } font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all duration-200`}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2"
                                >
                                    {item.icon} {item.tab}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="bottom mb-6 mx-auto">
                <button
                    onClick={() => {
                        window.location.href = "/api/logout";
                    }}
                    className="text-white text-xl border-2 border-white rounded-lg px-10 py-1 hover:bg-gray-500 transition-all duration-200"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
