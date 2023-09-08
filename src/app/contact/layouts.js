import React from 'react'

function contactLayout({ children }) {
    return (
        <div>
            <div className="">
                <div className="bg-secondary-blue italic text-white px-14 py-11 text-center">
                    authir
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default contactLayout
