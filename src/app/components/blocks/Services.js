import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import SingleService from './SingleService'

function Services({ data }) {
    return (
        <>
            <div data-tina-field={tinaField(data, 'body')} className="mb-10">
                <TinaMarkdown content={data.body} />
            </div>
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {data.servicelist?.map((service, i) => {
                    return <SingleService key={i} {...service} />
                })}
            </div>
        </>
    )
}

export default Services

export const servicesTemplate = {
    label: 'Services',
    name: 'service',
    format: 'md',
    fields: [
        {
            name: 'title',
            label: 'Nom du service',
            type: 'string',
            isTitle: true,
            required: true,
        },
        {
            name: 'body',
            label: 'Texte du service',
            type: 'rich-text',
        },
        {
            name: 'servicelist',
            label: 'Services',
            type: 'object',
            list: true,
            ui: {
                description: 'Choissisez les services à afficher',
            },
            fields: [
                {
                    name: 'service',
                    label: 'Services dispos',
                    type: 'reference',
                    collections: ['service'],
                },
            ],
        },
    ],
}
