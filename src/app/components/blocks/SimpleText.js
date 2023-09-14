import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

function SimpleText({ data }) {
    return (
        <div data-tina-field={tinaField(data, 'description')} className="mb-12">
            <TinaMarkdown content={data.description} />
        </div>
    )
}

export default SimpleText

export const simpleTextTemplate = {
    name: 'simpletext',
    label: 'Texte simple',
    format: 'md',
    fields: [
        {
            name: 'description',
            label: 'Description',
            type: 'rich-text',
        },
    ],
}
