import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const components = {
    p: (props) => <p {...props} />,
}

export default function Hero(props) {
    return (
        <div className="h-full text-center flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2
                    data-tina-field={tinaField(props, 'headline')}
                    className="mx-auto text-5xl leading-tight tracking-tighter text-primary md:text-7xl"
                >
                    {props.headline}
                </h2>
                <h3
                    data-tina-field={tinaField(props, 'tagline')}
                    className="mx-auto text-5xl leading-tight tracking-tighter text-primary md:text-7xl"
                >
                    {props.tagline}
                </h3>
                <div data-tina-field={tinaField(props, 'description')}>
                    <TinaMarkdown content={props.description} />
                </div>
            </div>
        </div>
    )
}

export const heroBannerTemplate = {
    name: 'hero',
    label: 'Hero page',
    fields: [
        {
            name: 'headline',
            label: 'Headline',
            type: 'string',
        },
        {
            name: 'tagline',
            label: 'Tagline',
            type: 'string',
        },
        {
            name: 'description',
            label: 'Texte',
            type: 'rich-text',
            // isBody: true,
            // ui: { component: 'textarea' },
        },
    ],
}
