function MobileNav(props) {
    const { links, onHandleNav } = props
    return (
        <div className="absolute w-56 z-50 bg-white top-11 right-0 ">
            {links}
        </div>
    )
}

export default MobileNav
