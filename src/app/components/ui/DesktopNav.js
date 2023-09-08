import React from 'react'

function DesktopNav({ links }) {
    return (
        <div className="hidden md:block">
            <nav className="flex space-x-4">{links}</nav>
        </div>
    )
}

export default DesktopNav
