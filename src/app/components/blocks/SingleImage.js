import Image from 'next/image'
import React from 'react'

function SingleImage(props) {
    const { image } = props
    return (
        <div className="mb-6" >
            <Image
                src={image}
                width={600}
                height={600}
                alt="salut"
                className="w-full"
            />
        </div>
    )
}

export default SingleImage

export const imageTemplate = {
    name: 'image',
    label: 'Single image',
    fields: [
        {
            name: 'image',
            label: 'Photo',
            type: 'image',
        },
    ],
}
