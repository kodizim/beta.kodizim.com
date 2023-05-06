import React from 'react';
import Link from 'next/link';
import {navigation} from "@/utils/navigation";

const BreadcrumbNavigation = ({currentPath}) => {
    const breadcrumbs = navigation.find(nav => nav.url === currentPath);

    return (
        <div className="container mx-auto px-4 py-4 bg-black cursor-pointer">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" legacyBehavior>
                       <img src="/mini-logo.svg" alt="Logo" />
                    </Link>
                    {breadcrumbs && (
                        <div className="ml-4">
                            <span className="text-white">{breadcrumbs.title}</span>
                        </div>
                    )}
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/digital-garden">
                                Digital Bahçe
                            </Link>
                        </li>
                        <li>
                            <Link href="/mentor">
                                Mentor
                            </Link>
                        </li>
                        <li>
                            <Link href="/mentee">
                                Mentee
                            </Link>
                        </li>
                        <li>
                            <Link href="/events">
                                Etkinlikler
                            </Link>
                        </li>
                        <li>
                            <Link href="/freelance">
                                Freelance
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BreadcrumbNavigation;
