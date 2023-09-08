import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

function SimpleText(props) {
    return (
        <div
            data-tina-field={tinaField(props, 'description')}
            className="mb-12"
        >
            <TinaMarkdown content={props.description} />
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
