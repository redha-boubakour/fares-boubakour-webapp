import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className='flex flex-row justify-center gap-10 p-10 z-10'>
            <Link scroll={false} href='/'>
                Home
            </Link>
            <Link scroll={false} href='/about'>
                About
            </Link>
            <Link scroll={false} href='/gallery'>
                Gallery
            </Link>
            <Link scroll={false} href='/contact'>
                Contact
            </Link>
        </div>
    );
}
