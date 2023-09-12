'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Navbar() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [isNavActive, setIsNavActive] = useState(false)
    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/galeries', label: 'Galeries' },
        { href: '/services', label: 'Tarifs & prestations' },
        { href: '/contact', label: 'Contact' },
    ]

    const links = navLinks.map((link, i) => {
        const isActive = pathname === link.href
        const activeLink = isActive ? 'active-link' : ''
        return (
            <Link
                key={i}
                href={link.href}
                className={`text-main-blue hover:bg-main-blue hover:text-white block px-3 py-2 sm:px-6 sm:py-4 text-base  ${activeLink}`}
                onClick={onHandleNav}
            >
                {link.label}
            </Link>
        )
    })
    function onHandleNav(e) {
        e.stopPropagation()
        setIsNavActive(!isNavActive)
    }
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsNavActive(false)
                setIsMobile(false)
                return
            }
            setIsMobile(true)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('click', onHandleNav)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('click', onHandleNav)
        }
    })

    return (
        <div className="relative mr-4">
            {!isMobile && <DesktopNav links={links} />}
            {isMobile && (
                <>
                    <ToggleButton onHandleNav={onHandleNav} />
                    {isNavActive && (
                        <MobileNav links={links} onHandleNav={onHandleNav} />
                    )}
                </>
            )}
        </div>
    )
}

const ToggleButton = ({ onHandleNav }) => {
    return (
        <button
            id="toggleNavButton"
            className="block sm:ml-6 md:hidden"
            onClick={onHandleNav}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 fill-main-blue"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
    )
}
