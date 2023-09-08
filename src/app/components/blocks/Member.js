import Image from 'next/image'
import React from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

function Member(props) {
    const { name, image, description } = props
    return (
        <div className="text-center">
            <h2>{name}</h2>
            <div className="">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={name}
                    className="inline-block"
                />
            </div>
            <div>
                <TinaMarkdown content={description} />
            </div>
        </div>
    )
}

export default Member
export const memberTemplate = {
    name: 'member',
    label: 'Team member',
    format: 'md',
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            label: 'Photo',
            type: 'image',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'rich-text',
        },
    ],
}
