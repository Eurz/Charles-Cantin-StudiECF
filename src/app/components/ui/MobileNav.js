import React from 'react'

function MobileNav(props) {
    const { links, onHandleNav } = props
    return (
        // <div className="fixed w-full h-screen z-50 bg-main-blue/75 top-0 left-0  ">
        <div className="absolute w-56 z-50 bg-white top-11 right-0 ">
            {links}
        </div>
    )
}

export default MobileNav
